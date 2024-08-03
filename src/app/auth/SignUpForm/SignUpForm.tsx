import { Button } from "@ui/components/Button";
import { Text } from "@ui/components/Text/Text";
import { TextInput } from "@ui/components/TextInput";
import { useFormik } from "formik";

interface FormValues {
  email: string;
  password: string;
}

export function SignUpForm() {
  const form = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-80 text-center">
      <Text size="h1" color="primary">
        Sign up
      </Text>
      <form className="mt-10" onSubmit={form.handleSubmit}>
        <div className="flex flex-col gap-5">
          <TextInput
            id="email"
            name="email"
            value={form.values.email}
            type="email"
            placeholder="Enter your email"
            onChange={form.handleChange}
          />
          <TextInput
            id="password"
            name="password"
            value={form.values.password}
            type="password"
            placeholder="Create your password"
            onChange={form.handleChange}
          />
        </div>
        <Button className="mt-10" type="submit" variant="primary" fullWidth>
          Sign up
        </Button>
      </form>
    </div>
  );
}
