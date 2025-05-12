import React, {useMemo} from 'react';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Pressable, View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {CheckBoxLabel} from '../../../../../components/molecules';
import {ModalFilterStyles} from './Modal.styles.ts';

interface IModalFilter {
    sheetRef: React.RefObject<BottomSheetModal | null>;
    setOrderRankAsc: (value: boolean) => void;
    orderRankAsk: boolean;
    setOrderRankDesc: (value: boolean) => void;
    orderRankDesc: boolean;
    setOrderPriceAsc: (value: boolean) => void;
    orderPriceAsc: boolean;
    setOrderPriceDesc: (value: boolean) => void;
    orderPriceDesc: boolean;
    handleApplyFilter: () => void;
    closeModal: () => void;
}

export const ModalFilter = ({
                                sheetRef,
                                setOrderRankAsc,
                                orderRankAsk,
                                setOrderRankDesc,
                                orderRankDesc,
                                setOrderPriceAsc,
                                orderPriceAsc,
                                setOrderPriceDesc,
                                orderPriceDesc,
                                handleApplyFilter,
                                closeModal,
}: IModalFilter) => {

    const snapPoints = useMemo(() => ['60%'], []);

    return (
        <BottomSheetModal
            ref={sheetRef}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
            snapPoints={snapPoints}
            backdropComponent={props => (
                <BottomSheetBackdrop
                    {...props}
                    pressBehavior="none"
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                />
            )}
            enablePanDownToClose={true}>
            <BottomSheetView style={ModalFilterStyles.container}>
                <TextComponent styles={ModalFilterStyles.textTile} text={'Filtrar'} />
                <TextComponent styles={ModalFilterStyles.textSubtitle} text={'Filtrar por ranking'} />
                <View style={ModalFilterStyles.containerCheck}>
                    <CheckBoxLabel text={'Mayor a Menor'} checked={orderRankAsk} toggleCheckbox={setOrderRankAsc} />
                </View>
                <View style={ModalFilterStyles.containerCheck}>
                    <CheckBoxLabel text={'Menor a Mayor'} checked={orderRankDesc} toggleCheckbox={setOrderRankDesc} />
                </View>
                <TextComponent styles={ModalFilterStyles.textSubtitle} text={'Filtrar por precio en dólar'} />
                <View style={ModalFilterStyles.containerCheck}>
                    <CheckBoxLabel text={'Mayor a Menor'} checked={orderPriceAsc} toggleCheckbox={setOrderPriceAsc} />
                </View>
                <View style={ModalFilterStyles.containerCheck}>
                    <CheckBoxLabel text={'Menor a Mayor'} checked={orderPriceDesc} toggleCheckbox={setOrderPriceDesc} />
                </View>
                <Pressable style={ModalFilterStyles.buttonApply} onPress={handleApplyFilter}>
                    <TextComponent styles={ModalFilterStyles.textApply} text={'Aplicar'} />
                </Pressable>
                <Pressable style={ModalFilterStyles.buttonCancel} onPress={closeModal}>
                    <TextComponent styles={ModalFilterStyles.textApply} text={'Cancelar'} />
                </Pressable>
            </BottomSheetView>
        </BottomSheetModal>
    );
};
