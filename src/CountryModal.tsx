import * as React from 'react'
import { ModalProps, SafeAreaView, StyleSheet } from 'react-native'
import { Modal } from './Modal'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const CountryModal = ({
  children,
  withModal,
  ...props
}: ModalProps & { children: React.ReactNode; withModal?: boolean }) => {
  const { backgroundColor } = useTheme()
  const content = (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {children}
    </SafeAreaView>
  )
  if (withModal) {
    return <Modal {...props}>{content}</Modal>
  }
  return content
}

CountryModal.defaultProps = {
  animationType: 'slide',
  animated: true,
  withModal: true
}
