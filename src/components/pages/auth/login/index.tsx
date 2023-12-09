import { useForm } from "@mantine/form";
import { TextInput, Button, Box, PasswordInput } from "@mantine/core";

export function LoginFormComponent() {
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 0 ? "Please enter password" : null),
    },
  });

  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
