import { useAuthContext } from "@app/context/auth";
import { Button } from "@ui/components/Button";
import { Text } from "@ui/components/Text/Text";
import { TextInput } from "@ui/components/TextInput";
import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import { object, string, ValidationError, type ObjectSchema } from "yup";
import { PasswordValiditySection } from "./PasswordValiditySection";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema: ObjectSchema<FormValues> = object().shape({
  email: string().email().required(),
  password: string()
    .min(8, { name: "min-length" })
    .matches(/[a-z]/, { name: "min-one-lowercase" })
    .matches(/[A-Z]/, { name: "min-one-uppercase" })
    .matches(/\d/, { name: "min-one-digit" })
    .matches(/^\S*$/, { name: "no-whitespace" })
    .required(),
});

export function SignUpForm() {
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const { login } = useAuthContext();

  const form = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    validate: (values: FormValues) => {
      try {
        validationSchema.validateSync(values, { abortEarly: false });
        setPasswordErrors([]);
      } catch (validationError: unknown) {
        const validationErrors: FormikErrors<FormValues> = {};

        if (validationError instanceof ValidationError) {
          const pwdErrors: string[] = [];
          validationError.inner.forEach((error) => {
            // keep error message per field for the default formik behavior
            validationErrors[error.path as keyof FormValues] = error.message;

            // store all password errors separately
            if (error.path === "password") {
              pwdErrors.push(error.type ?? error.message);
            }
          });

          setPasswordErrors(pwdErrors);
        }
        return validationErrors;
      }
    },
    onSubmit: () => {
      login();
    },
  });

  return (
    <div className="w-80 text-center z-10">
      <Text size="h1" color="primary">
        Sign up
      </Text>
      <form className="mt-10" onSubmit={form.handleSubmit}>
        <div className="flex flex-col gap-5">
          <TextInput
            autoComplete="email"
            error={form.touched.email && !!form.errors.email}
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            valid={!form.errors.email}
            value={form.values.email}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <TextInput
            autoComplete="new-password"
            error={form.touched.password && !!form.errors.password}
            id="password"
            name="password"
            placeholder="Create your password"
            type="password"
            valid={!form.errors.password}
            value={form.values.password}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <div className="flex flex-col text-left pl-5 gap-1">
            <PasswordValiditySection
              passwordErrors={passwordErrors}
              passwordFieldTouched={Boolean(form.touched.password)}
            />
          </div>
        </div>
        <Button className="mt-10" type="submit" variant="primary" fullWidth>
          Sign up
        </Button>
      </form>
    </div>
  );
}
