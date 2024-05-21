import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LoginType, login as apiLogin } from "../../services/apiAuth";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }: LoginType) =>
      apiLogin({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.data);
      navigate("/");
    },
    onError: (err) => {
      console.log("error", err);
    },
  });

  return { login, isLogin };
};
