import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

// モーダルコンポーネント
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal allergy-info__modal">
            <div className="allergy-info__content">
                <span className="modal__close" onClick={onClose}>
                    &times;
                </span>
                <StaticImage
                    alt="Allergy Information"
                    src="../images/allergy-info.jpg"
                />
            </div>
        </div>
    );
};

// アレルギー情報用コンポーネント
const AllergyInfo = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // モーダルの開閉関数
    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    // 背景クリック時のハンドラー
    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <div className="allergy-info">
            <a className="allergy-info--text" onClick={openModal}>
                {t('“For allergy sufferers”')}
            </a>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={t('Informane o alergenech')}
                content={t(
                    'All allergy information can be provided by the staff.'
                )}
            />
        </div>
    );
};

export default AllergyInfo;
