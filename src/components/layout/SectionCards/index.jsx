import {
  Container,
  TitleCards,
  AreaCards,
  Card,
  CardName,
  CardDescription
} from './styles'

export default function SectionCards(){
  return(
    <Container>
      <TitleCards>Se está aqui é porque já tentou métodos falhos como esses:</TitleCards>

      <AreaCards>
        <Card>
          <CardName>Curso de vender curso</CardName>
          <CardDescription>Velha história de vender um curso sobre vender um curso, esquema pra tirar dinheiro de quem busca lucro fácil. No fim, só o dono do curso ganha, enquanto os alunos ficam esperando uma fórmula que nunca chega.</CardDescription>
        </Card>
        <Card>
          <CardName>Afiliado</CardName>
          <CardDescription>Afiliado parecia o "novo ouro", né? Mas é um modelo saturado e ultrapassado. Você depende de comissões baixas, vendendo produtos que ninguém quer. E o "primeiro milhão"? Nem sinal dele.</CardDescription>
        </Card>
        <Card>
          <CardName>Casa de aposta</CardName>
          <CardDescription>Prometem dinheiro rápido, mas na realidade, as pessoas acabam viciadas e perdendo mais do que ganham, enquanto as casas de aposta lucram milhões explorando os sonhos dos jogadores.</CardDescription>
        </Card>
        <Card>
          <CardName>Venda de Ebook</CardName>
          <CardDescription>Já viu alguém que ficou milionário somente vendendo ebook? Pois é, nem eu. Um mercado saturado, onde a qualidade foi substituída por volume de material inútil.</CardDescription>
        </Card>
        <Card>
          <CardName>Conta de Cortes</CardName>
          <CardDescription>Parece fácil, mas só quem já tem uma grande audiência se destaca. O mercado está saturado e dominado pelas grandes contas. Vale a pena investir tanto tempo e energia para ganhar uns trocados em monetização?</CardDescription>
        </Card>
        <Card>
          <CardName>Faculdade</CardName>
          <CardDescription>Anos de estudo e dívidas, e um diploma que não serve para o mundo real. Muitos graduados ficam longe da estabilidade financeira e acabam fazendo Uber para pagar as contas.</CardDescription>
        </Card>
      </AreaCards>
    </Container>
  )
}