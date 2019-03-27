/*1553723233,,JIT Construction: v4897825,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a,b,c,d,e){c=24*60*60;d=7*c;var f="https://developers.facebook.com/docs/accountkit/integratingweb#configureloginhtml";f="Please ensure the AccountKit SDK is hotlinked directly. See "+f;b=Math.floor(new Date().getTime()/1e3)-b;if(b>d)throw new Error("The SDK is more than 7 days old. "+f);else if(b>c){d=window.console;d&&d.warn("The SDK is more than 1 day old. "+f)}window.AccountKit||(window.AccountKit={doNotLinkToSDKDirectly:"doNotLinkToSDKDirectly"});b=document.createElement("script");b.src=a;b.async=!0;e&&(b.crossOrigin="anonymous");c=document.getElementsByTagName("script")[0];c.parentNode&&c.parentNode.insertBefore(b,c)})("https:\/\/sdk.accountkit.com\/en_US\/sdk.js?hash=7d98956aa861d9acd9e3a1bbd96b5a82", 1553723233, "AccountKit", [], true);