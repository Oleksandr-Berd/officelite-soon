export type Props ={
    children: React.ReactNode;
}

export type StyleProps = {
    color?:string;
    bg?: string;
}

export type LinkButtonProps = {
    location: "intro" | "proposal";
    color: string;
}

export type CounterProps = {
  location: "home" | "sign";
};

export type InputProps = {
  isError: "error" | null;
};