import { useNavigation } from "expo-router";
import { useEffect } from "react";

export function useOnScreenListener(
  evnetType: "focus" | "blur" | "state" | "beforeRemove",
  callback: VoidFunction
) {
  const navigation = useNavigation();

  useEffect(() => {
    const subscribe = navigation.addListener(evnetType, callback);
    return subscribe;
  }, [navigation, callback]);
}
