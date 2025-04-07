import React from "react";

declare global {
  interface Window {
    IdentityKYC: {
      verify: (options: IdentityKycOptions) => void;
    };
  }
}

export interface KycResponse {
  data?: any;
  message?: string;
  status: "success" | "error";
}

export interface IdentityKycOptions {
  email: string;
  first_name: string;
  last_name: string;
  user_ref: string;
  is_test: boolean;
  config_id: string;
  merchant_key: string;
  callback: (response: KycResponse) => void;
}

const SCRIPT_ELEM =
  'script[src="https://js.prembly.com/v1/inline/widget-v2.js"]';

export const useIdentityKyc = () => {
  const isScriptLoaded = React.useRef(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (document.querySelector(SCRIPT_ELEM)) {
      isScriptLoaded.current = true;
      setIsReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.prembly.com/v1/inline/widget-v2.js";
    script.async = true;
    script.onload = () => {
      isScriptLoaded.current = true;
      setIsReady(true);
    };
    document.body.appendChild(script);
  }, []);

  const verifyKyc = (options: IdentityKycOptions) => {
    if (!isScriptLoaded.current || !window.IdentityKYC) {
      console.error("IdentityKYC script has not been loaded yet. Please wait");
      return false;
    }
    try {
      window.IdentityKYC.verify(options);
      return true;
    } catch (error) {
      console.error("Error initilizing KYC", error);
      return false;
    }
  };
  return {
    verifyKyc,
    isReady,
  };
};
