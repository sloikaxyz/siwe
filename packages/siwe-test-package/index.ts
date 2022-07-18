import {
    SiweMessage,
    SiweError,
    SiweResponse,
    VerifyOpts,
    VerifyOptsKeys,
    SiweErrorType,
    VerifyParams,
    VerifyParamsKeys,
    checkContractWalletSignature,
    generateNonce
} from "siwe";

generateNonce();