import Button from "./Button";

interface ModalConfirmProps {
    onCancel: () => void;
    onConfirm: () => void;
    message: string;
    title?: string;
    type?: 'Confirm' | 'Delete';
}

const ModalConfirm = (props: ModalConfirmProps) => {
    const { onCancel, onConfirm, message, title, type = 'Confirm' } = props;

        return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold">{title}</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-neutral-700">{message}</p>
                    <div className="flex w-full items-center justify-end gap-2 pt-2">
                        <Button type="button" onClick={onCancel} className="bg-neutral-500 hover:bg-neutral-600 transition-colors">
                            Cancel
                        </Button>
                        <Button type="button" onClick={onConfirm} className={type === 'Delete' ? 'bg-red-500 hover:bg-red-600 transition-colors' : 'bg-blue-500 hover:bg-blue-600 transition-colors'}>
                            {type}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm;