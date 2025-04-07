# Prembly Widget

Type-safe wrapper of the Prembly widget for KYC in React apps

## Usage

Install the package from npm with the command(s) below

```shell
pnpm add prembly-widget

npm i prembly-widget

yarn install prembly-widget
```

When the package is installed, you can import it in your component as a hook and use it like so:

```tsx
import { usePremblyWidget } from "prembly-widget"

const ExampleComponent = () => {
  const { verifyKyc, isReady } = useIdentityKyc();

  const handleVerification = () => {
    if (!isReady) {
      alert("Please wait...")
      return;
    }

    verifyKyc({
      merchant_key: "sandbox_pk_CzM....",
      first_name: "user's name",
      last_name: "user's last name",
      user_ref: "shsgjaa",
      is_test: true,
      email: user?.email || "",
      config_id: "dc0d9900-8e9a-40a9-b9cf-4d667", // you can obtain this from your dashboard
      callback: (response) => {
        if (response.status === "success") {
          console.log("hafa naaaa")
        } else {
          console.log("Omo kilon suppp")
        }
      }
    });
  };

  return (
    <button onClick={handleVerification}>
      trigger verification
    </button>
  )
}
```

For more info, on usage, checkout the [official doc](https://docs.prembly.com/docs/identity-verification-sdk)

## [License (MIT)](LICENSE)
