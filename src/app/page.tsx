
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana P.',
    role: 'Mãe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    message: 'Transformou a forma como lidamos com as emoções em casa. Meu filho está mais calmo e comunicativo. Recomendo!',
  },
  {
    name: 'Juliana S.',
    role: 'Psicóloga Infantil',
    avatar: 'https://i.pravatar.cc/150?img=2',
    message: 'Material rico e baseado em evidências. Uso com meus pacientes e os resultados são incríveis. Facilita muito o meu trabalho.',
  },
  {
    name: 'Carlos M.',
    role: 'Professor',
    avatar: 'https://i.pravatar.cc/150?img=3',
    message: 'As crianças amam as atividades! O aprendizado se tornou uma brincadeira. A dinâmica em sala de aula melhorou 100%.',
  },
  {
    name: 'Mariana L.',
    role: 'Mãe',
    avatar: 'https://i-pravatar-cc.imgix.net/150?img=4',
    message: 'Meu filho tinha muita dificuldade com frustrações. O Semáforo Emocional foi um divisor de águas para nós. Superou minhas expectativas!',
  },
];


const features = [
  {
    title: '🎡 Roda das Emoções',
    description: 'Uma poderosa ferramenta visual para ensinar crianças a nomear, reconhecer e validar 20 emoções, desenvolvendo inteligência emocional, prevenindo crises e melhorando a comunicação.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=290,fit=crop,trim=52.07449856733525;204.3583138173302;216.30945558739253;44.07728337236534/Yyv0g3O2kGIzkV71/caras-m2WEj5QO6eTWvjPO.png',
  },
  {
    title: '😊 Jogo de Rostos',
    description: 'Um jogo para reconhecer emoções por meio de expressões faciais e caretas. Conecte emoções e rostos de forma divertida e natural. Desenvolva empatia e habilidades expressivas.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=278,fit=crop,trim=24.857142857142854;4.967741935483871;84.51428571428572;39.74193548387097/Yyv0g3O2kGIzkV71/caras2-mePJBknWe8fr29r0.png',
  },
  {
    title: '🚦 Semáforo Emocional',
    description: 'Ensina autocontrole de forma clara, visual e eficaz. As crianças aprendem a parar, pensar e agir conscientemente, mesmo diante da raiva.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=294,fit=crop,trim=24.857142857142854;24.838709677419356;24.857142857142854;24.838709677419356/Yyv0g3O2kGIzkV71/semaforo-dWxOJanyVnc1OkMR.png',
  },
  {
    title: '♠️ Deck de Dentro para Fora',
    description: 'Um jogo com 36 perguntas que ensina as crianças a entender o que estão sentindo. Role o dado, compre uma carta e responda a uma pergunta!',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=292,fit=crop,trim=15.114942528735632;90.50625000000001;141.0727969348659;30.16875/Yyv0g3O2kGIzkV71/divertidamente-YD0w9n4Z9jUqZaZW.png',
  },
  {
    title: '🎲 Jogo Sensações',
    description: 'Combine rostos, expressões e 18 emoções de forma divertida e interativa. Um jogo de memória que ajuda a identificar, reconhecer e compreender sentimentos.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=295,fit=crop,trim=94.18604651162791;389.01960784313724;106.74418604651163;410.9803921568627/Yyv0g3O2kGIzkV71/design-sem-nome-4-mxBXyBg96ZfRa1l9.png',
  },
  {
    title: '🎭 Teatro de Expressões',
    description: '40 perguntas intrigantes e desafios emocionais para se expressar usando corpo, rosto e voz. Estimula a comunicação e a expressão emocional.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=290,fit=crop,trim=21.293706293706297;29.779005524861876;42.587412587412594;17.016574585635357/Yyv0g3O2kGIzkV71/tem-algo-que-te-da-muito-nojo-desafio-faassa-uma-cara-de-eca-e-finja-que-esta-empurrando-para-longe.-Yyv0evrLgjCP99ve.png',
  },
  {
    title: '👣 Rota das Emoções',
    description: 'Um jogo de tabuleiro que convida as crianças a contar histórias, compartilhar memórias e refletir sobre suas emoções.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=293,fit=crop,trim=30.074074074074073;20.065146579804562;35.08641975308642;40.130293159609124/Yyv0g3O2kGIzkV71/adiassapso-front-1-mP4M56E2aaF0rqQP.png',
  },
  {
    title: '🔮 Adivinhe a emoção?',
    description: 'Um divertido jogo de adivinhação em que as crianças representam emoções por meio de mímicas, gestos e expressões faciais e corporais.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=295,fit=crop,trim=29;29.056603773584904;29;29.056603773584904/Yyv0g3O2kGIzkV71/adiassapso-front-2-YbNJX6pqRKUw1OvG.png',
  },
  {
    title: '🧘🏻‍♀️ Calm Box',
    description: '20 cartões com dicas simples e práticas para acalmar, recuperar o equilíbrio e lidar com emoções difíceis. Uma ferramenta essencial para fortalecer o autocontrole.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=290,fit=crop,trim=21.293706293706297;29.779005524861876;42.587412587412594;17.016574585635357/Yyv0g3O2kGIzkV71/adiassapso-front-3-Y4Lv2nNxz3CJLq9M.png',
  },
];

const benefits = [
  'Previne birras, ataques de raiva, choro e explosões emocionais',
  'Reduz comportamentos desafiadores, agressividade e teimosia',
  'Reduz ansiedade, estresse, inseguranças e medos',
  'Ensina estratégias de controle de impulsos e autorregulação',
  'Desenvolver empatia, comunicação e habilidades sociais desde cedo',
  'Melhora a conexão e a convivência em casa, na escola e socialmente.',
  'Aumenta a confiança, a segurança emocional e a autoestima da criança',
  'Prepara a criança para enfrentar as frustrações com resiliência e equilíbrio',
];

const howItWorks = [
  {
    title: '📧 Receba tudo por e-mail!',
    description: 'Assim que sua compra for confirmada, o COMBO EMOTIONS chegará diretamente na sua caixa de entrada em formato PDF. Rápido, prático, seguro e sem complicações.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=257,fit=crop,trim=15.326797385620916;82.9367088607595;27.588235294117645;21.50210970464135/Yyv0g3O2kGIzkV71/design-sem-nome-3-Aq2Jx29XWvHPv8XG.png',
  },
  {
    title: '🖨️ Baixe e imprima no seu próprio ritmo!',
    description: 'Todos os materiais são organizados por tópico e conjunto de habilidades. Baixe os arquivos e imprima quando quiser, no seu próprio tempo e nos seus próprios termos.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=255,fit=crop,trim=8.579268292682926;37.03488372093023;8.579268292682926;37.03488372093023/Yyv0g3O2kGIzkV71/design-sem-nome-2-mxBXyBg946S2BoMw.png',
  },
  {
    title: '🎯 Coloque as atividades em prática!',
    description: 'Com os materiais em mãos, você auxilia a criança no processo de aprendizagem, explicando as atividades, incentivando a participação e oferecendo apoio.',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=230,fit=crop,trim=19.541666666666664;8.680351906158357;15.199074074074073;21.700879765395896/Yyv0g3O2kGIzkV71/design-sem-nome-5-AR03p0oz2GTJBeKz.png',
  },
];

const bonuses = [
  {
    title: 'BÔNUS 1: Livro "Emocionario, o Dicionário das Emoções"',
    description: 'Uma jornada lúdica pelo universo das emoções. Com ilustrações encantadoras e descrições acessíveis, as crianças exploram sentimentos e aprendem a lidar com isso.',
    price: 'DE R$15,00',
    newPrice: 'POR APENAS R$0',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=436,fit=crop,trim=19.535135135135135;31.564814814814813;19.535135135135135;31.564814814814813/Yyv0g3O2kGIzkV71/mock-ups-inteligaancia-emocional-2-dOqDjB6JekhxqMnm.png',
  },
  {
    title: 'BÔNUS 2: Guia Prático de Neurointeligência Emocional',
    description: 'Descubra como o cérebro das crianças reage às emoções e aprenda técnicas neurocompatíveis para promover a calma, o vínculo e a cooperação.',
    price: 'DE R$20,00',
    newPrice: 'POR APENAS R$0',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=436,fit=crop,trim=31.81283422459893;52.95731707317073;31.81283422459893;52.95731707317073/Yyv0g3O2kGIzkV71/bonus-3-AE0reX43VWFLk5bL.png',
  },
  {
    title: 'BÔNUS 3: Questionário - Teste de Perfil de Educação Emocional',
    description: 'Descubra o seu estilo, o impacto dele no desenvolvimento infantil e como se tornar um verdadeiro coach emocional!',
    price: 'DE R$15,00',
    newPrice: 'POR APENAS R$0',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=436,fit=crop,trim=31.81283422459893;58.431192660550465;21.208556149732622;26.55963302752294/Yyv0g3O2kGIzkV71/bonus-2-YD0w9n4Z7bUoE7oo.png',
  },
  {
    title: 'BÔNUS 4: Pôster "Canto da Calma"',
    description: 'O mapa que ajuda as crianças a se acalmarem, se autorregularem e recuperarem o equilíbrio emocional, mesmo nos momentos mais difíceis.',
    price: 'DE R$20,00',
    newPrice: 'POR APENAS R$0',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=535,fit=crop,trim=0;0;12.863247863247864;0/Yyv0g3O2kGIzkV71/cartaz-cantinho-da-calma-Yyv0nJ1azwF5l0PE.PNG',
  },
];

const faqItems = [
    {
        question: "Após a compra, como acesso o conteúdo?",
        answer: "Imediatamente após efetuar o pagamento, você receberá todas as instruções de login no seu e-mail. É muito fácil!"
    },
    {
        question: "Terei alguma garantia?",
        answer: "Claro! Assumimos todos os riscos porque confiamos na quality do nosso produto. Se ainda assim não estiver satisfeito, você pode solicitar um reembolso total nos primeiros 7 dias após o pagamento."
    },
    {
        question: "Por quanto tempo terei acesso ao produto?",
        answer: "Após a compra, o produto será seu por tempo indeterminado. Basta acessar a plataforma e baixar os arquivos quando quiser."
    },
    {
        question: "Como o material pode ser aplicado?",
        answer: "Você pode usar este material em oficinas, grupos de brincadeiras, aulas, sessões de terapia, em casa ou onde quiser. É portátil, leve e fácil de transportar, podendo ser usado individualmente ou em grupo."
    },
    {
        question: "Funciona para todas as crianças?",
        answer: "Este material é adequado para crianças de 3 a 11 anos, incluindo aquelas com transtornos."
    },
    {
        question: "Este material é para uso profissional?",
        answer: "Sim! Pode ser usado por psicólogos, terapeutas, neuropsicólogos, professores de educação infantil, educadores de pais e outros profissionais do desenvolvimento infantil. Todos os materiais incluem instruções de uso e sugestões de aplicação."
    },
    {
        question: "Sou mãe e não entendo nada de criação de filhos. Este produto é adequado para mim?",
        answer: "Claro! Desenvolvemos atividades fáceis de usar com base na neurociência e na psicologia comportamental infantil. Além disso, todos os materiais incluem uma página explicativa sobre como usar as atividades escolhidas."
    }
]

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="text-center py-12 bg-pink-50/90">
        <div className="container mx-auto px-4">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=286,fit=crop,trim=0;8.456621004566209;0;12.684931506849315/Yyv0g3O2kGIzkV71/super-combo-logo-latam-AzGNWaOKGPcV6Qnv.png"
            alt="Super Combo Logo"
            width={250}
            height={190}
            className="mx-auto mb-6 w-auto h-auto"
          />
          <h1 className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-6">
            Uma coleção divertida, interativa e envolvente para ensinar às crianças inteligência emocional, autocontrole e empatia de uma forma leve, divertida e eficaz.
          </h1>
          <div className="flex justify-center mb-6">
            <Image
              src="https://i.imgur.com/iyWXVl2.jpeg"
              alt="Product Collection"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-lg h-auto"
            />
          </div>
          <Button asChild size="lg" className="text-lg font-bold bg-green-500 hover:bg-green-600 text-white">
            <Link href="#offer">✅ QUERO MEU COMBO AGORA!</Link>
          </Button>
          <p className="mt-4 text-muted-foreground">👇 Role a página para baixo.</p>
        </div>
      </section>

      {/* What you will receive */}
      <section className="py-16 bg-card/90">
        <div className="container mx-auto text-center max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">👉 O que você receberá:</h2>
          <p className="text-lg">
            Você terá acesso a uma variedade de ferramentas exclusivas de psicoeducação emocional, 100% práticas, validadas e baseadas na neurociência e na psicologia comportamental infantil. Materiais dinâmicos e interativos que transformam o aprendizado emocional em experiências profundamente significativas, utilizando recursos visuais criativos e altamente estimulantes.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-pink-50/90">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="relative w-full mb-4 aspect-video">
                  <Image src={feature.imageUrl} alt={feature.title} fill objectFit="contain" className="rounded-t-lg" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="text-center py-12 bg-card/90">
        <div className="container mx-auto px-4">
            <Button asChild size="lg" className="text-lg font-bold bg-green-500 hover:bg-green-600 text-white">
                <Link href="#offer">👉 QUERO ACESSO AGORA!</Link>
            </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-background/90">
          <div className="container mx-auto max-w-4xl text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">✅ Benefícios combinados</h2>
              <p className="text-lg mb-8">Construa uma base sólida para um desenvolvimento emocional saudável na infância. Crie crianças mais confiantes, equilibradas e empáticas, preparadas para enfrentar os desafios da vida.</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                  {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <p>{benefit}</p>
                      </div>
                  ))}
              </div>
               <div className="text-center pt-12">
                <Button asChild size="lg" className="text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="#offer">📦 QUERO OS BENEFÍCIOS DO COMBO!</Link>
                </Button>
            </div>
          </div>
      </section>

       {/* How it works */}
       <section id="howitworks" className="py-16 bg-pink-50/90">
        <div className="container mx-auto text-center max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">COMO FUNCIONA ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index}>
                <Image src={step.imageUrl} alt={step.title} width={375} height={250} className="rounded-lg shadow-md mx-auto w-full h-auto" />
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section id="for-whom" className="py-16 bg-card/90">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 Para quem é?</h2>
            <p className="text-lg">Se você é mãe, cuidadora, psicóloga, terapeuta, educadora, professora, educadora parental ou trabalha com crianças/educação infantil, esta é a sua oportunidade de ensinar inteligência emocional! Acesse material enriquecedor e validado para mediação interativa e afetiva. Ideal para crianças de 3 a 11 anos , incluindo crianças com autismo, TDAH, TOD e outros transtornos do neurodesenvolvimento, que têm dificuldade em lidar com suas emoções, frustrações e desejos.</p>
          </div>
          <div>
            <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=486,fit=crop,trim=35.266331658291456;36.838016528925614;35.266331658291456;36.838016528925614/Yyv0g3O2kGIzkV71/mock-ups-inteligaancia-emocional-1-A0xjLJyL8KCXa01X.png" alt="Para quem é" width={768} height={486} className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

       {/* Bonus Section */}
      <section id="bonus" className="py-16 bg-pink-50/90">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">🎁 Receba 4 Super Bônus 🎁</h2>
          <p className="text-lg mb-8">Compre hoje e ganhe presentes especiais!</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="text-left">
                <CardHeader>
                  <Image src={bonus.imageUrl} alt={bonus.title} width={768} height={436} className="rounded-t-lg mb-4 w-full h-auto" />
                  <CardTitle>{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4 items-baseline">
                   <p className="text-destructive line-through">{bonus.price}</p>
                   <p className="text-lg font-bold text-green-600">{bonus.newPrice}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Card className="bg-secondary p-6 max-w-md mx-auto mb-8">
            <CardHeader>
              <CardTitle>BÔNUS TOTAL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>✅ Livro Digital Emocional <span className="line-through">R$ 15,00</span></p>
              <p>✅ Guia Prático de Neurointeligência Emocional <span className="line-through">R$ 20,00</span></p>
              <p>✅ Teste de Perfil de Educação Emocional <span className="line-through">R$ 15,00</span></p>
              <p>✅ Pôster "Canto da Calma" <span className="line-through">R$ 15,00</span></p>
            </CardContent>
            <CardFooter className="flex-col">
              <p className="text-destructive text-lg line-through">DE R$ 70,00</p>
              <p className="text-xl font-bold">VAI SAIR DE GRAÇA</p>
            </CardFooter>
          </Card>
          <Button asChild size="lg" className="text-xl font-bold">
            <Link href="#offer">QUERO GARANTIR MEUS BÔNUS!</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-background/90">
        <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">⭐⭐⭐⭐⭐ Confira os depoimentos</h2>
            <p className="text-lg mb-8">👍 Aprovado e recomendado por mães, professores, psicólogos e educadores.</p>
            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-green-100 p-4 rounded-lg shadow">
                    <CardContent className="text-left p-0">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-800">{testimonial.message}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 bg-pink-50/90">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center p-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🧠 SUPER COMBO Inteligência Emocional</h2>
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=763,fit=crop,trim=49.3056338028169;0;0;108.03783783783784/Yyv0g3O2kGIzkV71/mega-mock-ups-inteligaancia-emocional-latam-A1a5X9RjgGf1g909.png"
                alt="Super Combo Offer"
                width={768}
                height={763}
                className="rounded-lg mb-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-2 mb-6">
                <li>✅ Roda das Emoções</li>
                <li>✅ Jogo de Rostos</li>
                <li>✅ Semáforo Emocional</li>
                <li>✅ Embaralhe intensamente</li>
                <li>✅ Teatro das Expressões</li>
                <li>✅ Jogo das Sensações</li>
                <li>✅ Jornada das Emoções</li>
                <li>✅ Adivinhe a emoção</li>
                <li>✅ Caixa da Calma</li>
                <li>✅ Livro Emocional</li>
                <li>✅ Guia de Neurointeligência Emocional</li>
                <li>✅ Teste de Perfil de Educação Emocional</li>
                <li>✅ Pôster Cantinho da Calma</li>
              </ul>
              <div className="text-center mb-6">
                <p className="text-xl line-through text-destructive">DE R$ 97,00</p>
                <p className="text-4xl font-extrabold text-primary">POR APENAS R$ 37,00</p>
              </div>
              <Button asChild size="lg" className="text-xl font-bold w-full">
                <Link href="#offer">QUERO MEU SUPER COMBO</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-16 bg-card/90">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl px-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">🚨 NÓS ASSUMIMOS O RISCO!</h2>
            <p className="mb-4">Se você não estiver satisfeito com o combo, reembolsaremos seu dinheiro integralmente com apenas um e-mail, sem complicações. Você tem 7 dias de garantia para testar e aprovar o conteúdo.</p>
            <p>Temos certeza de que não será necessário, pois sabemos a transformação que esse material pode trazer para a vida dos seus filhos!</p>
          </div>
          <div>
            <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/Yyv0g3O2kGIzkV71/image-22-Aq2okBj6DJu222VQ.png" alt="7 Day Guarantee" width={375} height={375} className="mx-auto w-full max-w-xs h-auto" />
          </div>
        </div>
      </section>
      
      {/* Author Section */}
      <section id="author" className="py-16 bg-pink-50/90">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl px-4">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Quem o desenvolveu</h2>
            <p className="mb-4">A Dra. Isabel Oliveira é doutora em Design Educacional e especialista em Neurociência e Desenvolvimento Infantil. Ela também possui diversas certificações em Educação Parental, Disciplina Positiva, Coaching, Análise do Comportamento e Programação Neurolinguística (PNL).</p>
            <p>É fundadora do Instituto EducaMente e autora de diversos materiais para o ensino de inteligência emocional para crianças.</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image src="https://i.imgur.com/rVOn4zv.jpeg" alt="Dra. Isabel Oliveira" width={400} height={400} className="rounded-full shadow-lg w-full max-w-xs h-auto" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-background/90">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">❓ Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                 <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-6 text-center text-muted-foreground bg-card">
        <p>© Copyright EducaMente 2025. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

    

    