/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LogoutReason } from '../../whatsapp/enums';
import { AuthCode } from '../types';

export interface ConnEventTypes {
  'conn.auth_code_change': AuthCode | null;
  /**
   * Triggered afted a success QR code scan
   *
   * @example
   * ```javascript
   * WPP.on('conn.authenticated', () => {
   *   // Your code
   * });
   * ```
   */
  'conn.authenticated': undefined;
  'conn.logout': undefined;
  'conn.logout_reason': LogoutReason;
  /**
   * Triggered when the interface is booting
   *
   * @example
   * ```javascript
   * WPP.on('conn.main_init', () => {
   *   // Your code
   * });
   * ```
   */
  'conn.main_init': undefined;
  /**
   * Triggered when the main interface is loaded, but is syncing
   *
   * @example
   * ```javascript
   * WPP.on('conn.main_loaded', () => {
   *   // Your code
   * });
   * ```
   */
  'conn.main_loaded': undefined;
  /**
   * Triggered when the main interface is loaded, authenticated and ready to send message
   *
   * @example
   * ```javascript
   * WPP.on('conn.main_ready', () => {
   *   // Your code
   * });
   * ```
   */
  'conn.main_ready': undefined;
  /**
   * Triggered when a whatsapp web update is requested
   *
   * @example
   * ```javascript
   * WPP.on('conn.needs_update', () => {
   *   // Your code
   * });
   * ```
   */
  'conn.needs_update': undefined;

  /**
   * Triggered when the online change to online or offline
   *
   * @example
   * ```javascript
   * WPP.on('conn.online', (online) => {
   *   if (online) {
   *     console.log('You are online');
   *   } else {
   *     console.log('You are offline');
   *   }
   * });
   * ```
   */
  'conn.online': boolean;
  'conn.qrcode_idle': undefined;
  'conn.require_auth': undefined;
}
