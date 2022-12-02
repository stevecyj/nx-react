// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Banner } from '@nx-react/common-ui';
import { exampleProducts } from '@nx-react/products';

export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      {exampleProducts.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong> Price: {product.proce}
        </li>
      ))}
      <NxWelcome title="store" />
      <div />
    </>
  );
}

export default App;
