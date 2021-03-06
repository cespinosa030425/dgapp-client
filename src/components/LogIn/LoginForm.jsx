import React, { useState, useContext } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl';
import Input from '../../common/components/Input/Input';
import Button from '../../common/components/Button/Button';
import Modal from '../../common/components/Modal/Modal';
import GlobalContext from '../../context/GlobalContext';

const LoginForm = ({ profileInputs, handeleSignIn, intl, profile, modalActive, modalToggle, userRegister }) => {

    // //ContexState
    const [contextState] = useContext(GlobalContext)

    const [modalValidaton, setModalValidation] = useState(false);

    const placeholderUser = intl.formatMessage({ id: 'login.username', defaultMessage: 'Username' });
    const placeholderPass = intl.formatMessage({ id: 'login.password', defaultMessage: 'Password' });
    const placeholderEmail = intl.formatMessage({ id: 'modal.input.email', defaultMessage: 'Enter your Email' });
    const placeholderId = intl.formatMessage({ id: 'modal.input.id', defaultMessage: 'Enter your Document ID' });
    const modalTitle = intl.formatMessage({ id: 'modal.title.forgot', defaultMessage: 'ACCOUNT RECOVERY' });
    const modalTitleAuth = intl.formatMessage({ id: 'modal.title.authenticate', defaultMessage: 'AUTHENTICATE' });

    const [inputFields, setInputField] = useState([
        { id: 1, name: 'email', type: 'email', placeholder: placeholderEmail },
        { id: 2, name: 'id', type: 'text', placeholder: placeholderId }
    ]);

    console.log(modalValidaton)

    return (

        <>
            <Modal
                modalTitle={modalValidaton ? modalTitleAuth : modalTitle}
                modalActive={modalActive}
                modalToggle={modalToggle}
                inputState={inputFields}
                setInputState={setInputField}
            />

            <div className="container-login">
                <div className="d-flex justify-content-center">
                    <p className="txt-title">
                        <FormattedMessage id="login.title" defaultMessage="WELCOME" />
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="txt-subtitle">
                        <FormattedMessage id="login.subtitle" defaultMessage="Sing in to your account" />
                    </p>
                </div>

                <div className="row mt-5">
                    <form className="" name="loginForm" action="" method="post" /*onSubmit={handeleSignIn}*/>
                        <div className="d-flex justify-content-center mb-4">
                            <Input
                                name="username"
                                type="text"
                                maxLength="16"
                                minLength="4"
                                placeholder={placeholderUser}
                                required
                                onChange={profileInputs}
                                value={profile.username}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Input
                                name="password"
                                type="password"
                                placeholder={placeholderPass}
                                // minLength="8"
                                required
                                onChange={profileInputs}
                                value={profile.password}
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <p className="txt-forgot" onClick={modalToggle}>{<FormattedMessage id="login.forgot" defaultMessage="Forgot Password?" />}</p>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <Button
                                className="btn-login"
                                name="btn-submit"
                                type="submit"
                                formatMsgId="login.login"
                                formatMsgDefault="Login"
                                onClick={handeleSignIn}>
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <Button
                                className="btn-create"
                                name="btn-create"
                                type="button"
                                formatMsgId="login.create"
                                formatMsgDefault="Create an account"
                                onClick={contextState.token ? userRegister : modalToggle}
                            >
                            </Button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}


export default injectIntl(LoginForm);
