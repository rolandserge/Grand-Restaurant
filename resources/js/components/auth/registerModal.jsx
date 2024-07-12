import React from 'react'
import AuthModal from './modal'

export default function RegisterModal({ authOpened, authClose,authDescription, authType, authLabel, labelButton, loginModal }) {

    return (
        <AuthModal
            authOpened={authOpened}
            authClose={authClose}
            authDescription={authDescription}
            authType={authType}
            authLabel={authLabel}
            labelButton={labelButton}
            loginModal={loginModal}
        />
    )
}
