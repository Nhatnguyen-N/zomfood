import { createContext, ReactNode, useContext } from "react";
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SharedContextParams {
  scrollY: SharedValue<number>;
  globallScrollY: SharedValue<number>;
  scrollToTop: () => void;
}
const SharedContext = createContext<SharedContextParams | undefined>(undefined);

export const SharedContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const scrollY = useSharedValue(0);
  const globallScrollY = useSharedValue(0);

  const scrollToTop = () => {
    scrollY.value = withTiming(0, { duration: 300 });
    globallScrollY.value = withTiming(0, { duration: 300 });
  };
  return (
    <SharedContext.Provider value={{ scrollY, globallScrollY, scrollToTop }}>
      {children}
    </SharedContext.Provider>
  );
};
export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (context === undefined) {
    throw new Error(
      "Acess denied, call use context within a Shared context Provider"
    );
  }
  return context;
};
