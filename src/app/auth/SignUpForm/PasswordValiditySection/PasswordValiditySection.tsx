import { Text, type TextProps } from "@ui/components/Text/Text";

export interface PasswordValiditySectionProps {
  passwordFieldTouched: boolean;
  passwordErrors: string[];
}

export function PasswordValiditySection(props: PasswordValiditySectionProps) {
  const { passwordFieldTouched, passwordErrors } = props;

  function getPasswordRuleColor(rules: string[]): TextProps["color"] {
    const hasErrors = rules.some((rule) => passwordErrors.includes(rule));

    if (!passwordFieldTouched) {
      return hasErrors ? "primary" : "success";
    }

    return hasErrors ? "error" : "success";
  }

  return (
    <>
      <Text color={getPasswordRuleColor(["min", "no-whitespace"])} size="label">
        8 characters or more (no spaces)
      </Text>
      <Text
        color={getPasswordRuleColor(["min-one-uppercase", "min-one-lowercase"])}
        size="label"
      >
        Uppercase and lowercase letters
      </Text>
      <Text color={getPasswordRuleColor(["min-one-digit"])} size="label">
        At least one digit
      </Text>
    </>
  );
}
