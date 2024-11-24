import React from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    closeButtonText: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
                                                     visible,
                                                     onClose,
                                                     title,
                                                     message,
                                                     closeButtonText,
                                                 }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    {title && <Text style={styles.modalTitle}>{title}</Text>}
                    <Text style={styles.modalText}>{message}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeModalButton}>
                        <Text style={styles.closeModalText}>{closeButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeModalButton: {
        backgroundColor: '#1b5e20',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeModalText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default CustomModal;
