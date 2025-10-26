import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import IconClose from '../assets/images/icon-close'
import Alert from './Alert'

const FAQ = ({
    isOpen,
    handleOpen,
}: {
    isOpen: boolean;
    handleOpen: (value?: boolean) => void;
}) => {
    const [confirmAction, setConfirmAction] = useState<boolean>(false)

    const handleClose = () => {
        handleOpen(!isOpen)
        setConfirmAction(false)
    }

    const handleDownload = () => {
        console.log('download data + show success/error toast')
    }

    const handleUpload = () => {
        console.log('upload data + show success/error toast')
    }

    const handleCancelUpload = () => {
        setConfirmAction(false)
    }

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                className="relative z-10"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-base-200/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                            >
                                <div className="relative flex h-full flex-col overflow-y-auto bg-base-100 py-6 shadow-lg">
                                    <div className="px-4 sm:px-6">
                                        <DialogTitle className="text-base font-semibold text-base-content">
                                            What is going on here?
                                        </DialogTitle>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <h2 className="text-sm font-semibold pb-1">
                                            A digital character sheet
                                        </h2>
                                        <p className="text-sm">
                                            This website allows you to manage your character sheet for
                                            Legacy & Saga games. It strives to support all the rules and
                                            possible configurations for any given character trait you
                                            want, but it is definitely a work in progress. If there is a
                                            feature or element you would like to see here that is not yet
                                            supported, if you are in the ToaSE discord server you can DM
                                            me (<span className="italic">@heathervv</span>) or email me (
                                            <span className="italic">heathervandervecht@gmail.com</span>).
                                        </p>
                                        <hr className="mt-4 border-base-content/10" />
                                        <h2 className="text-sm font-semibold pt-4 pb-1">
                                            How it works
                                        </h2>
                                        <p className="text-sm pb-2">
                                            This is a browser-based tool. No data is sent over the
                                            network. Specifically, your data is saved in the localstorage
                                            of whichever browser you are using. If you'd like to switch to
                                            using a different device (or browser), please follow these
                                            steps:
                                        </p>
                                        <ol className="list-decimal pl-4">
                                            <li className="text-sm pb-1">Download your character data from the browser that has your data using the "download" button below.</li>
                                            <li className="text-sm pb-1">Upload your character data into the browser you'd like to use using the "upload" button below.</li>
                                        </ol>
                                        <div className="flex gap-2 pt-4">
                                            <button onClick={handleDownload} className="btn btn-sm btn-success">Download</button>
                                            <button onClick={() => setConfirmAction(true)} className="btn btn-sm btn-error">Upload</button>
                                        </div>
                                    </div>
                                </div>
                                <TransitionChild>
                                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            onClick={() => handleOpen(!isOpen)}
                                            className="relative cursor-pointer"
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            <IconClose className="w-4 h-4 text-base-content/75" />
                                            {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                                        </button>
                                    </div>
                                </TransitionChild>
                                {confirmAction && (
                                    <Alert handleConfirm={handleUpload} handleCancel={handleCancelUpload} />
                                )}
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default FAQ