import { createRouter, createWebHistory } from 'vue-router'

import PricesView from '@/views/Prices.vue'
import OnePageCheckoutView from '@/views/OnePageCheckout.vue'
import ChangeProductView from '@/views/Account/ChangeProduct/ChangeProduct.vue'
import AccountView from '@/views/Account/Account.vue'
import PaymentView from '@/views/Account/Payment.vue'
import AddFundsView from '@/views/Account/AddFunds.vue'
import AddFundsCC from '@/views/Account/AddFunds/CC.vue'
import AddFundsPayPal from '@/views/Account/AddFunds/PayPal.vue'
import AddFundsBitcoin from '@/views/Account/AddFunds/BitCoin.vue'
import AddFundsMonero from '@/views/Account/AddFunds/Monero.vue'
import AddFundsCash from '@/views/Account/AddFunds/Cash.vue'
import AddFundsGiftCard from '@/views/Account/AddFunds/GiftCard.vue'

import WireguardView from '@/views/Account/Wireguard.vue'
import WireguardConfigView from '@/views/Account/WireguardConfig.vue'
import PortForwardingView from '@/views/Account/PortForwarding.vue'
import Settings from '@/views/Account/Settings.vue'
import SettingsAuthentication from '@/views/Account/Settings/Authentication.vue'
import SettingsBilling from '@/views/Account/Settings/Billing.vue'
import SettingsDelete from '@/views/Account/Settings/Delete.vue'
import LoginView from '@/views/Login.vue'
import NotFoundView from '@/views/404.vue'

import PasswordResetView from '@/views/PasswordReset.vue'
import PasswordResetCommitView from '@/views/PasswordResetCommit.vue'
import ThankYouBTCView from '@/views/Account/ThankYouBTC.vue'
import ThankYouView from '@/views/Account/ThankYou.vue'
import InvoiceView from '@/views/Account/Invoice.vue'
import ApplePayView from '@/views/Account/AddFunds/ApplePay.vue'
import GooglePayView from '@/views/Account/AddFunds/GooglePay.vue'

import InternalErrorView from '../views/500.vue'

import store from '@/store'

async function notAuthenticatedGuard(to, from, next) {
    if (store.state.auth.isAuthenticated) {
        if (store.state.auth.isLegacy) {
            window.location = '/clientarea'
            next(false)
        } else {
            next({ name: 'account' })
        }
    } else {
        next()
    }
}

const routes = [
    {
        path: '/app', redirect: { name: 'prices' },
    },
    {
        path: '/', redirect: { name: 'prices' },
    },
    {
        path: '/light',
        name: 'light',
        component: OnePageCheckoutView,
        meta: {
            title: 'IVPN one page checkout',
        }
    },
    {
        path: '/pricing',
        name: 'prices',
        component: PricesView,
        meta: {
            title: 'IVPN Pricing - VPN subscription with anonymous registration',
        }
    },
    {
        path: '/prices', redirect: { name: 'prices' }
    },
    {
        path: '/account/login',
        name: 'login',
        component: LoginView,
        meta: {
            title: 'IVPN Login',
        },
        beforeEnter: notAuthenticatedGuard,
    },
    {
        path: '/recover/password',
        name: 'recover-password',
        component: PasswordResetView,
        meta: {
            title: 'Recover Password',
        },
        beforeEnter: notAuthenticatedGuard,
    },
    {
        path: '/recover/password/:token',
        name: 'recover-password-commit',
        component: PasswordResetCommitView,
        meta: {
            title: 'Recover Password',
        },
        beforeEnter: notAuthenticatedGuard,
    },
    {
        path: '/account/logout',
        name: 'logout',
        beforeEnter: async (to, from, next) => {
            try {
                await store.dispatch('auth/logout')
                next({ name: 'login' })
            } catch (error) {
                console.error(error)
                next({ name: '500' })
            }
        }
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView,
        meta: {
            title: 'IVPN Account',
        },
    },
    {
        path: '/account/change-product',
        name: 'change-product',
        component: ChangeProductView,
        meta: {
            title: 'IVPN Account - Change Product',
        }
    },
    {
        path: '/account/payment/btc/thank-you',
        name: 'btc-thank-you',
        component: ThankYouBTCView,
        meta: {
            title: 'IVPN Account - Thank You',
        }
    },
    {
        path: '/account/payment/:refid/received',
        name: 'payment-received',
        component: ThankYouView,
        meta: {
            title: 'IVPN Account - Payment has been received',
        }
    },
    {
        path: '/account/payment/:refid/invoice',
        name: 'payment-invoice',
        component: InvoiceView,
        meta: {
            title: 'IVPN Account - Invoice for payment',
        }
    },
    {
        path: '/account/payment',
        component: PaymentView,
        name: 'payment',
        meta: {
            title: 'IVPN Account - Payment',
        }
    }, {
        path: '/account/settings',
        component: Settings,
        children: [
            {
                path: '',
                name: 'settings-main',
                component: SettingsAuthentication,
                meta: {
                    title: 'Account settings - Authentication',
                }
            },
            {
                path: 'billing',
                name: 'settings-billing',
                component: SettingsBilling,
                meta: {
                    title: 'Account settings - Billing',
                }
            },
            {
                path: 'delete',
                name: 'settings-delete',
                component: SettingsDelete,
                meta: {
                    title: 'Account settings - Delete account',
                }
            },
        ],
    },
    {
        path: '/account/add-funds/:price',
        component: AddFundsView,
        children: [
            {
                path: 'cc', name: 'add-funds-cc',
                component: AddFundsCC,
                meta: {
                    title: 'IVPN Add Funds - Credit Card',
                }
            },
            {
                path: 'paypal', name: 'add-funds-paypal',
                component: AddFundsPayPal,
                meta: {
                    title: 'IVPN Add Funds - PayPal',
                },
            }, {
                path: 'bitcoin', name: 'add-funds-bitcoin',
                component: AddFundsBitcoin,
                meta: {
                    title: 'IVPN Add Funds - Bitcoin',
                }
            }, {
                path: 'monero', name: 'add-funds-monero',
                component: AddFundsMonero,
                meta: {
                    title: 'IVPN Add Funds - Monero',
                }
            }, {
                path: 'voucher', name: 'add-funds-voucher',
                component: AddFundsGiftCard,
                meta: {
                    title: 'IVPN Add Funds - Voucher',
                }
            }, {
                path: 'applepay', name: 'add-funds-apple',
                component: ApplePayView,
                meta: {
                    title: 'IVPN Add Funds - ApplePay',
                }
            }, {
                path: 'googlepay', name: 'add-funds-google',
                component: GooglePayView,
                meta: {
                    title: 'IVPN Add Funds - GooglePay',
                }
            }, {
                path: 'cash', name: 'add-funds-cash',
                component: AddFundsCash,
                meta: {
                    title: 'IVPN Add Funds - Cash',
                }
            }
        ],
    },
    {
        path: '/account/change-product',
        name: 'account-change-product',
        component: ChangeProductView,
        meta: {
            title: 'IVPN Change Product',
        }
    },
    {
        path: '/account/wireguard',
        name: 'wireguard',
        component: WireguardView,
        meta: {
            title: 'IVPN Account - WireGuard',
        }
    },
    {
        path: '/account/wireguard-config',
        name: 'wireguard-config',
        component: WireguardConfigView,
        meta: {
            title: 'IVPN Account - WireGuard Configuration',
        }
    },
    {
        path: '/account/port-forwarding',
        name: 'port-forwarding',
        component: PortForwardingView,
        meta: {
            title: 'IVPN Account - Port Forwarding',
        }
    },
    {
        path: '/404',
        name: '404',
        component: NotFoundView,
        meta: {
            title: 'IVPN - Not Found',
        }
    },
    {
        path: '/500',
        name: '500',
        component: InternalErrorView,
        meta: {
            title: 'Whoops, something went wrong.',
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: { name: '404' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    store,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach(async (to, from, next) => {

    if (to.path.startsWith('/account') && to.name != 'login') {

        if (!store.state.auth.isAuthenticated) {
            next({ name: 'login' })
            return
        }

        if (store.state.auth.isLegacy) {
            window.location = '/clientarea'
            return
        }

        await store.dispatch('auth/load')

        if (!store.state.auth.isAuthenticated) {
            // Go to login page in case account could not be loaded
            next({ name: 'login' })
            return
        }

        // Show error if there was any non-authentication issue while loading the account
        // like the network one. 

        // We don't want user to think that they are logged out
        // when there is an underlying network issues. Otherwise, a proper 
        // 'error' page have to be displayed, so user can refresh the page. 

        // Probably, all of this code have to be moved to an app initialization component

        if (store.state.auth.error != null) {
            next({ name: '500' })
            return
        }

        next()

    } else {
        next()
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'IVPN'
})

export default router
