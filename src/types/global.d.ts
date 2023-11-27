type User = {
  id: string
  name: string
  email: string
  password?: string,
  avatar: string
}

interface UserContextInterface {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

type UserProviderProps = {
  children: React.ReactNode
}

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost";
};

interface CustomButtonProps extends FormSubmitProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface PopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

interface LogoProps {
  name?: string;
  ContainerClassName?: string;
  height?: number;
  width?: number;
  ImageClassName?: string;
}

interface CustomCardProps<T = React.ReactNode> extends Record<string, T> {}

type AuthTitle = "Sign Up" | "Sign In" | "Forgot Password" | "Reset Password"