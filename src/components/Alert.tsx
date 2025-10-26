const Alert = ({ handleConfirm, handleCancel }: { handleConfirm: () => void, handleCancel: () => void }) => {
    return (
        <div className="fixed inset-0 bg-base-200/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0">
            <div className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center justify-center">
                <div className="card bg-base-100 card-border border-base-300 card-sm p-4 m-2">
                    <p className="text-sm font-semibold pb-2">This is a destructive action and will replace any data currently saved to this browser.</p>
                    <p className="text-sm">This action cannot be undone. Do you want to upload?</p>
                    <div className="flex pt-4 gap-2">
                        <button onClick={handleConfirm} className="btn btn-sm btn-error">Yes, upload</button>
                        <button onClick={handleCancel} className="btn btn-sm btn-ghost">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert