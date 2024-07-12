import React from 'react'
import AuthModal from './modal'

export default function LoginModal({ authOpened, authClose, authLabel, authDescription, authType, labelButton, registerModal }) {

    return (
        <AuthModal
            authOpened={authOpened}
            authClose={authClose}
            authLabel={authLabel}
            authDescription={authDescription}
            authType={authType}
            labelButton={labelButton}
            registerModal={registerModal}
        />
    )
}
