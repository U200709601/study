import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import BaseButton from 'src/components/buttons/BaseButton';
import { useTranslation } from 'react-i18next';


export default function BaseDialogSimple({ title, message, open, setOpen, callback }) {
    const { t } = useTranslation();
    const onDisagree = () => {
        callback(false);
        setOpen(false);
    }

    const onAgree = () => {
        callback(true);
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={onDisagree}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <BaseButton autoFocus onClick={onDisagree} label={t('disagree')} color="primary" />
                <BaseButton onClick={onAgree} label={t('agree')} color="secondary" />
            </DialogActions>
        </Dialog>
    );
}