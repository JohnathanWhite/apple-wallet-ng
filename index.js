var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Apple Wallet
 * @description
 * A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.
 *
 * @usage
 * ```typescript
 * import { AppleWallet } from '@ionic-native/apple-wallet';
 *
 *
 * constructor(private appleWallet: AppleWallet) { }
 *
 *
 * ...
 *
 *
 * // Simple call to check whether the app can add cards to Apple Pay.
 * this.appleWallet.available()
 *  .then((res) => {
 *    // Apple Wallet is enabled and a supported card is setup. Expect:
 *    // boolean value, true or false
 *   })
 *  .catch((message) => {
 *    // Error message while trying to know if device is able to add to wallet
 *  });
 *
 *
 * ...
 *
 *
 * // Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
 * // The encryption scheme, cardholder name, and primary account suffix are required for configuration.
 * // The configuration information is used for setup and display only. It should not contain any sensitive information.
 *
 * let data: cardData = {
 *    cardholderName: 'Test User',
 *    primaryAccountNumberSuffix: '1234',
 *    localizedDescription: 'Description of payment card',
 *    paymentNetwork: 'VISA'
 *  }
 *
 * this.appleWallet.startAddPaymentPass(data: cardData)
 *  .then((res) => {
 *    // User proceed and successfully asked to add card to his wallet
 *    // Use the callback response JSON payload to complete addition process
 *   })
 *  .catch((err) => {
 *    // Error or user cancelled.
 *  });
 *
 * // You should expect the callback success response to be as follow
 *
 *  // {
 *  //  data: {
 *  //    "certificateSubCA": "Base64 string represents certificateSubCA",
 *  //    "certificateLeaf":" Base64 string represents certificateLeaf"
 *  //    "nonce": "Base64 string represents nonce",
 *  //    "nonceSignature": "Base64 string represents nonceSignature",
 *  //   }
 *  // }
 *
 * // This method provides the data needed to create an add payment request.
 * // Pass the certificate chain to the issuer server. The server returns an encrypted JSON file containing the card data.
 * // After you receive the encrypted data, pass it to completeAddPaymentPass method
 *
 *
 * ...
 *
 *
 * let data: encryptedCardData = {
 *    activationData: 'encoded Base64 activationData from your server',
 *    encryptedPassData: 'encoded Base64 encryptedPassData from your server',
 *    wrappedKey: 'encoded Base64 wrappedKey from your server',
 *  }
 *
 * this.appleWallet.encryptedCardData(data: encryptedCardData)
 *  .then((res) => {
 *    // callback success response means card has been added successfully,
 *    // PKAddPaymentPassViewController will be dismissed
 *   })
 *  .catch((err) => {
 *    // Error and can not add the card, or something wrong happend
 *    // PKAddPaymentPassViewController will be dismissed
 *  });
 *
 * ```
 * @Interfaces
 * EncryptedCardData
 * CardData
 */
var AppleWallet = (function (_super) {
    __extends(AppleWallet, _super);
    function AppleWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Detects if the current device supports Apple Wallet
     * @return {Promise<boolean>} Returns a promise
     */
    /**
       * Detects if the current device supports Apple Wallet
       * @return {Promise<boolean>} Returns a promise
       */
    AppleWallet.prototype.available = /**
       * Detects if the current device supports Apple Wallet
       * @return {Promise<boolean>} Returns a promise
       */
    function () {
        return;
    };
    /**
     * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
     * @param {cardData} data
     * @return {Promise<any>} Returns a promise
     */
    /**
       * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
       * @param {cardData} data
       * @return {Promise<any>} Returns a promise
       */
    AppleWallet.prototype.startAddPaymentPass = /**
       * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
       * @param {cardData} data
       * @return {Promise<any>} Returns a promise
       */
    function (data) {
        return;
    };
    /**
     * Simple call contains the card data needed to add a card to Apple Pay.
     * @param {encryptedCardData} data
     * @return {Promise<any>} Returns a promise
     */
    /**
       * Simple call contains the card data needed to add a card to Apple Pay.
       * @param {encryptedCardData} data
       * @return {Promise<any>} Returns a promise
       */
    AppleWallet.prototype.completeAddPaymentPass = /**
       * Simple call contains the card data needed to add a card to Apple Pay.
       * @param {encryptedCardData} data
       * @return {Promise<any>} Returns a promise
       */
    function (data) {
        return;
    };
    AppleWallet.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppleWallet.prototype, "available", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AppleWallet.prototype, "startAddPaymentPass", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AppleWallet.prototype, "completeAddPaymentPass", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AppleWallet.prototype, "checkPairedDevicesBySuffix", null);
    /**
     * @name Apple Wallet
     * @description
     * A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.
     *
     * @usage
     * ```typescript
     * import { AppleWallet } from '@ionic-native/apple-wallet';
     *
     *
     * constructor(private appleWallet: AppleWallet) { }
     *
     *
     * ...
     *
     *
     * // Simple call to check whether the app can add cards to Apple Pay.
     * this.appleWallet.available()
     *  .then((res) => {
     *    // Apple Wallet is enabled and a supported card is setup. Expect:
     *    // boolean value, true or false
     *   })
     *  .catch((message) => {
     *    // Error message while trying to know if device is able to add to wallet
     *  });
     *
     *
     * ...
     *
     *
     * // Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
     * // The encryption scheme, cardholder name, and primary account suffix are required for configuration.
     * // The configuration information is used for setup and display only. It should not contain any sensitive information.
     *
     * let data: cardData = {
     *    cardholderName: 'Test User',
     *    primaryAccountNumberSuffix: '1234',
     *    localizedDescription: 'Description of payment card',
     *    paymentNetwork: 'VISA'
     *  }
     *
     * this.appleWallet.startAddPaymentPass(data: cardData)
     *  .then((res) => {
     *    // User proceed and successfully asked to add card to his wallet
     *    // Use the callback response JSON payload to complete addition process
     *   })
     *  .catch((err) => {
     *    // Error or user cancelled.
     *  });
     *
     * // You should expect the callback success response to be as follow
     *
     *  // {
     *  //  data: {
     *  //    "certificateSubCA": "Base64 string represents certificateSubCA",
     *  //    "certificateLeaf":" Base64 string represents certificateLeaf"
     *  //    "nonce": "Base64 string represents nonce",
     *  //    "nonceSignature": "Base64 string represents nonceSignature",
     *  //   }
     *  // }
     *
     * // This method provides the data needed to create an add payment request.
     * // Pass the certificate chain to the issuer server. The server returns an encrypted JSON file containing the card data.
     * // After you receive the encrypted data, pass it to completeAddPaymentPass method
     *
     *
     * ...
     *
     *
     * let data: encryptedCardData = {
     *    activationData: 'encoded Base64 activationData from your server',
     *    encryptedPassData: 'encoded Base64 encryptedPassData from your server',
     *    wrappedKey: 'encoded Base64 wrappedKey from your server',
     *  }
     *
     * this.appleWallet.encryptedCardData(data: encryptedCardData)
     *  .then((res) => {
     *    // callback success response means card has been added successfully,
     *    // PKAddPaymentPassViewController will be dismissed
     *   })
     *  .catch((err) => {
     *    // Error and can not add the card, or something wrong happend
     *    // PKAddPaymentPassViewController will be dismissed
     *  });
     *
     * ```
     * @Interfaces
     * EncryptedCardData
     * CardData
     */
    AppleWallet = __decorate([
        Plugin({
            pluginName: 'AppleWallet',
            plugin: 'cordova-apple-wallet',
            pluginRef: 'AppleWallet',
            repo: 'https://github.com/tomavic/cordova-apple-wallet',
            platforms: ['iOS']
        })
    ], AppleWallet);
    return AppleWallet;
}(IonicNativePlugin));
export { AppleWallet };
//# sourceMappingURL=index.js.map
