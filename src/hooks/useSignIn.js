import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [authorize, result] = useMutation(AUTHORIZE, {
    onError: (err) => console.log("error", err),
  });

  const signIn = async ({ username, password }) => {
    const { data } = await authorize({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authorize.accessToken);
    await apolloClient.resetStore();
    return result;
  };
  return [signIn, result];
};

export default useSignIn;
