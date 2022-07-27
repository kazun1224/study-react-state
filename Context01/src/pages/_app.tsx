import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { TodosProvider } from "src/state/todo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
}

// createContextで定義したものをuseContextで任意の場所に呼び出して使用することができる
// sample

// const ThemeContext = createContext("light")
// const theme = useContext(ThemeContext);
// console.log(theme);

// 動的にする場合はProviderで囲みvalueの値を変更して渡す
{
  /* <ThemeContext.Provider value=""><ThemeContext.Provider/> */
}
