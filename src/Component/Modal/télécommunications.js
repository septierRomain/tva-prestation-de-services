import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button circular size='mini' basic color='teal' animated='vertical' className='infos'>
          <Button.Content hidden>Infos</Button.Content>
          <Button.Content visible>
            <Icon name='idea' />
          </Button.Content>
        </Button>}
    >
      <Header icon>
        <Icon name='idea' />
        Prestations de télécommunication
      </Header>
      <Modal.Content>
        <p>
          <ul><Icon name='angle right' /> Les services de téléphonie fixe et mobile pour la transmission et la commutation de la voix, de données et d’images, y compris les services téléphoniques comportant une composante d’imagerie (services de vidéophonie)</ul>
          <ul><Icon name='angle right' /> Les services téléphoniques fournis par internet, y compris le protocole de téléphonie vocale par internet (VoIP)</ul>
          <ul><Icon name='angle right' /> La messagerie vocale, l’appel en instance, le transfert d’appel, l’identification de l’appelant, la conversation à trois et les autres services de gestion d’appels</ul>
          <ul><Icon name='angle right' /> Les services de radiomessagerie</ul>
          <ul><Icon name='angle right' /> Les services d'audio-texte, la télécopie, le télégraphe et le télex</ul>
          <ul><Icon name='angle right' /> L’accès à l’internet, y compris le World Wide Web</ul>
          <ul><Icon name='angle right' /> Les connexions privées fournissant des liens de télécommunication à l’usage exclusif du preneur</ul>
          <ul><Icon name='angle right' /> Les frais forfaitaires de raccordement, de transfert et de cession d'abonnement</ul>
          <ul><Icon name='angle right' /> Les redevances d'abonnement</ul>
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic