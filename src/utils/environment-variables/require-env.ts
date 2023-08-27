const requireEnv = (name: string, value?: string, def?: string) => {
  if (!value && !def) {
    throw new Error(
      `${name} is required in environment variables, but was not provided`
    );
  }

  return (value || def) as string;
};

export default requireEnv;
