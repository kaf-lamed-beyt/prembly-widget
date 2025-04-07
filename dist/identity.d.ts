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
export declare const useIdentityKyc: () => {
    verifyKyc: (options: IdentityKycOptions) => boolean;
    isReady: boolean;
};
