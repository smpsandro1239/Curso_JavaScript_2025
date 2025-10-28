

import React, { useState } from 'react';
import TopicCard from './components/TopicCard';
import { 
  ToolIcon, PuzzleIcon, BrowserIcon, GitBranchIcon, FileIcon, 
  JsIcon, SyntaxIcon, VariableIcon, TypeIcon, OperatorIcon, ExerciseIcon,
  DecisionIcon, LoopIcon, AdvancedLoopIcon, QuizIcon, SummaryIcon, SwitchIcon,
  FunctionIcon, TemplateLiteralIcon, ScopeIcon, ClosureIcon, ArrowFunctionIcon,
  ArrayIcon, ObjectIcon, IterationIcon, ReduceIcon, DestructuringIcon,
  FactoryIcon, PrototypeIcon, ClassIcon, InheritanceIcon, EncapsulationIcon,
  CallbackIcon, PromiseIcon, FetchIcon, AsyncAwaitIcon, ParallelIcon
} from './components/icons';

const gitignoreContent = `# Ficheiros de dependências
/node_modules

# Ficheiros de build
/dist
/build

# Ficheiros de log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Ficheiros de ambiente
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Ficheiros do sistema operativo
.DS_Store
Thumbs.db`;

const Module0 = () => (
  <div className="space-y-8 animate-fade-in">
    <TopicCard title="Instalação de Ferramentas Essenciais" icon={<ToolIcon />}>
      <p>
        Vamos começar por instalar o software fundamental que será usado ao longo de todo o curso.
      </p>
      <ul>
        <li><strong>Visual Studio Code (VS Code):</strong> O nosso editor de código principal. É gratuito, poderoso e altamente personalizável. <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Faz o download aqui.</a></li>
        <li><strong>Node.js (LTS):</strong> Permite executar JavaScript fora do navegador. A versão LTS (Long-Term Support) é a mais estável. <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Instala a partir do site oficial.</a></li>
        <li><strong>NVM (Node Version Manager):</strong> Uma ferramenta essencial para gerir múltiplas versões do Node.js no mesmo computador. Evita muitos problemas de compatibilidade no futuro. Segue as instruções de instalação para <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Linux/macOS</a> ou <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noopener noreferrer">Windows</a>.</li>
      </ul>
    </TopicCard>

    <TopicCard title="Extensões Recomendadas para VS Code" icon={<PuzzleIcon />}>
      <p>
        Estas extensões vão melhorar a tua produtividade e ajudar a manter o código limpo e consistente. Podes instalá-las a partir do painel de Extensões (Ctrl+Shift+X) no VS Code.
      </p>
      <ul>
        <li><strong>Prettier - Code formatter:</strong> Formata o teu código automaticamente ao guardar. Imprescindível para consistência.</li>
        <li><strong>ESLint:</strong> Analisa o código para encontrar problemas, desde erros de sintaxe a más práticas. Ajuda a escrever melhor JavaScript.</li>
        <li><strong>Quokka.js:</strong> Um "playground" para JavaScript diretamente no teu editor. Executa o código à medida que o escreves, ótimo para testes rápidos.</li>
      </ul>
    </TopicCard>
    
    <TopicCard title="Primeiros Passos no DevTools" icon={<BrowserIcon />}>
      <p>
        As Ferramentas de Programador (DevTools) do teu navegador são o teu melhor amigo para depurar código no "frontend". Pressiona <strong>F12</strong> (ou Ctrl+Shift+I / Cmd+Opt+I) para as abrir.
      </p>
      <ul>
        <li><strong>Console:</strong> Onde vês mensagens de log (<code>console.log</code>), erros e podes interagir com a página em tempo real.</li>
        <li><strong>Elements:</strong> Mostra o HTML e CSS da página, permitindo inspecionar e modificar elementos.</li>
        <li><strong>Sources:</strong> Permite ver os ficheiros de código fonte e, mais importante, colocar "breakpoints" para depurar o teu código passo a passo.</li>
      </ul>
    </TopicCard>

    <TopicCard title="Git & GitHub Básico" icon={<GitBranchIcon />}>
      <p>
        Git é o sistema de controlo de versões que te permite guardar o histórico do teu código. GitHub é a plataforma onde alojas os teus repositórios Git.
      </p>
      <p>Comandos essenciais para o dia-a-dia:</p>
      <ul className="list-none p-0 font-mono text-sm space-y-1">
          <li><span className="text-cyan-400">git init</span> - Inicia um novo repositório local.</li>
          <li><span className="text-cyan-400">git add .</span> - Adiciona todos os ficheiros modificados para a próxima "fotografia" (commit).</li>
          <li><span className="text-cyan-400">git commit -m "A tua mensagem"</span> - Guarda a "fotografia" com uma mensagem descritiva.</li>
          <li><span className="text-cyan-400">git push</span> - Envia os teus commits para o repositório remoto (GitHub).</li>
          <li><span className="text-cyan-400">git pull</span> - Vai buscar as alterações mais recentes do repositório remoto.</li>
      </ul>
        <p className="mt-4">
        Cria uma conta em <a href="https://github.com/">GitHub.com</a> e instala o Git a partir de <a href="https://git-scm.com/">git-scm.com</a>.
      </p>
    </TopicCard>
    
    <TopicCard title="Configurar .gitignore para Node" icon={<FileIcon />}>
      <p>
        O ficheiro <code>.gitignore</code> diz ao Git quais ficheiros ou pastas ignorar. Isto é crucial para não enviar ficheiros desnecessários ou sensíveis para o GitHub. Cria um ficheiro chamado <code>.gitignore</code> na raiz do teu projeto e adiciona o seguinte conteúdo.
      </p>
      <pre className="bg-slate-950 rounded-md p-4 overflow-x-auto text-sm ring-1 ring-slate-700">
        <code className="font-mono text-emerald-300 whitespace-pre-wrap">
          {gitignoreContent}
        </code>
      </pre>
    </TopicCard>
  </div>
);

const Lesson1_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: O Primeiro 'Olá, Mundo!'" icon={<JsIcon />}>
            <p><strong>Meta:</strong> Ao final desta aula, serás capaz de enviar as tuas primeiras instruções em JavaScript, comunicando tanto com o programador (através da consola) como com o utilizador (através de caixas de diálogo).</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: As Três 'Vozes' do JS" icon={<SyntaxIcon />}>
            <p>Pensa no JavaScript como um ator num palco. Ele tem três maneiras de comunicar:</p>
            <ul>
                <li><code>console.log('Olá!')</code>: É como um <strong>sussurro para o diretor</strong> (o programador). Só tu o vês nos bastidores, na consola (F12). É perfeito para dar notas a ti mesmo sem que o público veja.</li>
                <li><code>alert('Cuidado!')</code>: É um <strong>monólogo dramático que para a peça</strong>. O público (utilizador) tem de prestar atenção e clicar "OK" para a história continuar. Usa-o com moderação.</li>
                <li><code>prompt('Qual o teu nome?')</code>: É quando o ator <strong>quebra a quarta parede e fala com o público</strong>. A peça para e espera por uma resposta.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática Guiada: Usando as Três Vozes" icon={<ExerciseIcon />}>
            <p>Vamos experimentar estas "vozes". Abre a consola do teu navegador (F12), vai ao separador "Console" e escreve o seguinte código, pressionando Enter após cada linha:</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// 1. O sussurro para o programador
console.log("Eu estou a aprender JavaScript!");

// 2. O grito que para tudo
alert("Bem-vindo ao nosso curso!");

// 3. A pergunta direta ao utilizador
prompt("Por favor, diz-nos o teu nome.");`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Estás a tentar descobrir porque é que um cálculo no teu código está a dar um resultado errado. Qual das "vozes" é a mais apropriada para usares para ver os valores intermédios sem interromper o fluxo para o utilizador?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> <code>console.log()</code>. É a ferramenta de depuração número um. Podes "imprimir" o valor de qualquer variável na consola a qualquer momento para "espreitar" o que se passa nos bastidores do teu código.</p>
        </TopicCard>
    </div>
);

const Lesson1_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: As 'Caixas' da Memória" icon={<VariableIcon />}>
            <p><strong>Meta:</strong> Aprender a declarar variáveis para guardar informação. Vamos focar-nos na diferença crucial entre `const` e `let` e aplicar a regra de ouro da declaração de variáveis.</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: Caixas de Arrumação" icon={<VariableIcon />}>
            <p>Variáveis são como <strong>caixas de arrumação com etiquetas</strong>. A etiqueta é o nome da variável, e o que está lá dentro é o valor.</p>
            <ul>
                <li><code>const</code>: É uma <strong>caixa de acrílico transparente e selada</strong>. Depois de guardares algo lá dentro, não podes trocar o item. Podes ver o que tem, mas não mudar. É a tua opção por defeito, a mais segura.</li>
                <li><code>let</code>: É uma <strong>caixa de cartão normal</strong>. Podes abrir, tirar o que lá está e colocar uma coisa nova sempre que precisares. Usa-a apenas quando sabes que o valor vai precisar de mudar.</li>
                <li><code>var</code>: Uma caixa velha e com buracos que por vezes deixa o conteúdo vazar. <strong>Prometemos a nós mesmos não a usar.</strong></li>
            </ul>
            <p><strong>Regra de Ouro:</strong> Começa sempre com <code>const</code>. Se o programa der um erro porque precisas de alterar o valor, só aí é que mudas para <code>let</code>.</p>
        </TopicCard>
        <TopicCard title="Prática Guiada: Ver o Erro Acontecer" icon={<ExerciseIcon />}>
            <p>Vamos guardar a idade de um utilizador e tentar alterá-la. Abre a consola e escreve isto:</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const anoNascimento = 1995;
let idade = 29;

console.log("Idade inicial:", idade); // Mostra 29

// A idade muda todos os anos, por isso usamos let
idade = 30;
console.log("Nova idade:", idade); // Mostra 30. Tudo certo!

// O ano de nascimento não muda. O que acontece se tentarmos?
anoNascimento = 1996; // Tenta fazer isto na consola`}</code>
            </pre>
            <p>Ao tentares executar a última linha, a consola vai dar um erro: <code>TypeError: Assignment to constant variable.</code>. Este erro é teu amigo! Ele está a proteger-te de mudar algo que não devia ser mudado.</p>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Num jogo, a variável `pontuacaoMaxima` guarda o recorde de todos os tempos. A variável `pontuacaoAtual` guarda a pontuação da jogada corrente. Como declararias cada uma?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `const pontuacaoMaxima` porque, embora o valor possa vir de uma base de dados, durante a sessão de jogo ele não se altera. `let pontuacaoAtual` porque este valor vai ser constantemente atualizado à medida que o jogador ganha pontos.</p>
        </TopicCard>
    </div>
);

const Lesson1_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: Os 'Ingredientes' do Código" icon={<TypeIcon />}>
            <p><strong>Meta:</strong> Reconhecer os tipos de dados primitivos. Assim como um chef distingue sal de açúcar, um programador tem de distinguir texto de números.</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: Ingredientes de uma Receita" icon={<TypeIcon />}>
            <p>Os tipos de dados são os ingredientes básicos de qualquer programa. Não podes usar sal (texto) quando a receita pede açúcar (número).</p>
            <ul>
                <li><code>string</code>: <strong>Texto</strong>. Sempre entre aspas ou crases. Ex: <code>"João"</code>, <code>'Rua das Flores, nº 123'</code>.</li>
                <li><code>number</code>: <strong>Números</strong>. Para qualquer tipo de matemática. Ex: <code>30</code>, <code>1.75</code>, <code>-10</code>.</li>
                <li><code>boolean</code>: <strong>Interruptores</strong>. Só podem ser <code>true</code> (ligado) ou <code>false</code> (desligado).</li>
                <li><code>undefined</code>: A caixa está <strong>vazia porque te esqueceste</strong> de pôr algo lá dentro. Ex: <code>let nome;</code></li>
                <li><code>null</code>: A caixa está <strong>vazia de propósito</strong>. Tu, programador, decidiste que não deveria ter valor.</li>
            </ul>
            <p>Para descobrir o tipo de um ingrediente, usamos o "inspetor" <code>typeof</code>.</p>
        </TopicCard>
        <TopicCard title="Prática Guiada: Inspecionar os Ingredientes" icon={<ExerciseIcon />}>
            <p>Vamos declarar variáveis de diferentes tipos e usar o `typeof` para confirmar.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const nome = "Ana";
const idade = 30;
const temCartaConducao = true;
let carro = null; // A Ana não tem carro, é um valor nulo de propósito
let telemovel; // Esquecemo-nos de definir o modelo

console.log(typeof nome);             // "string"
console.log(typeof idade);            // "number"
console.log(typeof temCartaConducao); // "boolean"
console.log(typeof carro);            // "object" (um bug histórico de JS, mas representa nulo)
console.log(typeof telemovel);        // "undefined"`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Qual é o tipo de dado da variável `preco` na seguinte declaração: `const preco = "15.99€";`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> <code>string</code>. Porque está entre aspas. Mesmo que contenha números, a presença das aspas e do símbolo "€" torna-o um texto. Não poderíamos fazer matemática diretamente com esta variável.</p>
        </TopicCard>
    </div>
);

const Lesson1_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: O 'Tradutor Universal'" icon={<FunctionIcon />}>
            <p><strong>Meta:</strong> Aprender a converter tipos de dados. Vamos focar-nos no problema mais comum: os dados que recebemos do utilizador vêm como `string` e precisamos deles como `number`.</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: Falar com Estrangeiros" icon={<FunctionIcon />}>
            <p>Imagina que és um contabilista (o teu programa que só entende `number`) e o teu cliente (o utilizador via `prompt`) só te fala em post-its de papel (<code>string</code>). Não podes somar os post-its. Precisas de um <strong>tradutor</strong> que leia o post-it e te diga o número em voz alta.</p>
            <p>Esses tradutores em JavaScript são funções:</p>
            <ul>
                <li><code>Number(post_it)</code>: Lê um `string` como <code>"75"</code> e devolve o `number` <code>75</code>.</li>
                <li><code>String(numero)</code>: Pega num `number` como <code>10</code> e devolve o `string` <code>"10"</code>.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática Guiada: Corrigir o Input da Calculadora" icon={<ExerciseIcon />}>
            <p>Vamos pegar nos inputs da nossa calculadora de IMC e ver o problema na prática antes de o corrigirmos.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const pesoInput = prompt("Qual é o seu peso em kg? (ex: 75)");
const alturaInput = prompt("Qual é a sua altura em metros? (ex: 1.75)");

// Verificar o tipo ANTES da tradução
console.log(typeof pesoInput); // "string"

// Tentar fazer matemática com strings (vai dar asneira)
console.log(pesoInput + alturaInput); // Junta os textos: "751.75"

// Agora, vamos usar o tradutor!
const pesoNumero = Number(pesoInput);
const alturaNumero = Number(alturaInput);

// Verificar o tipo DEPOIS da tradução
console.log(typeof pesoNumero); // "number"

// Tentar fazer matemática com numbers
console.log(pesoNumero + alturaNumero); // Soma os números: 76.75`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> O que acontece se tentares fazer `Number("olá")`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> O resultado é `NaN` (Not a Number). O JavaScript tenta traduzir, mas "olá" não tem uma representação numérica. `NaN` é um tipo `number` especial que nos avisa que uma operação matemática falhou.</p>
        </TopicCard>
    </div>
);

const Lesson1_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: A Caixa de Ferramentas" icon={<OperatorIcon />}>
            <p><strong>Meta:</strong> Utilizar operadores para manipular os nossos dados numéricos. Vamos aplicar a fórmula do IMC e introduzir o operador de comparação mais importante.</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: Ferramentas de Carpintaria" icon={<OperatorIcon />}>
            <p>Operadores são as tuas ferramentas. Tens os teus materiais (as variáveis), agora precisas de os cortar, juntar e medir.</p>
            <p><strong>Ferramentas Aritméticas:</strong></p>
            <ul>
                <li><code>+</code> (Adição), <code>-</code> (Subtração), <code>*</code> (Multiplicação), <code>/</code> (Divisão)</li>
                <li><code>%</code> (Módulo): O <strong>resto</strong> de uma divisão. Muito útil para saber se um número é par ou ímpar.</li>
                <li><code>**</code> (Exponenciação): Elevar a uma potência. <code>2 ** 3</code> é 8.</li>
            </ul>
            <p><strong>Ferramenta de Medição (Comparação):</strong></p>
            <ul>
                <li><code>===</code> (Igualdade Estrita): O teu <strong>paquímetro digital</strong>. Verifica se duas coisas são idênticas em valor E tipo. É a única ferramenta de comparação de igualdade que deves usar para começar.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática Guiada: Calcular o IMC" icon={<ExerciseIcon />}>
            <p>Com os nossos valores já convertidos para `number`, vamos aplicar a fórmula: IMC = peso / (altura * altura).</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const peso = 75;      // Em kg, já como number
const altura = 1.75;  // Em metros, já como number

// Usar os operadores para aplicar a fórmula
const imc = peso / (altura * altura); // ou peso / (altura ** 2)

console.log("O resultado cru do IMC é:", imc); // ex: 24.4897959...

// Usar a ferramenta de medição
const metaIMC = 25;
console.log(imc === metaIMC); // false`}</code>
            </pre>
            <p>O resultado é um número com muitas casas decimais. Na próxima aula, vamos tratar de o apresentar de forma mais elegante.</p>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Qual é o resultado de `10 % 3`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `1`. Porque 10 a dividir por 3 dá 3, e sobra 1.</p>
        </TopicCard>
    </div>
);

const Lesson1_6 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo da Aula: A Apresentação Final" icon={<TemplateLiteralIcon />}>
            <p><strong>Meta:</strong> Aprender a construir strings de forma moderna com Template Literals e a formatar números, juntando tudo para apresentar o resultado final da nossa calculadora.</p>
        </TopicCard>
        <TopicCard title="Teoria com Analogia: Empratamento do Chef" icon={<TemplateLiteralIcon />}>
            <p>O teu cálculo está feito, a comida está cozinhada. Agora é a hora de a "empratar" para que pareça apetitosa para o cliente (utilizador).</p>
            <ul>
                <li><strong>Concatenação (o método antigo):</strong> <code>{'\'Olá \' + nome + \', a tua idade é \' + idade + \'.\''}</code>. É como atirar a comida para o prato. Funciona, mas é desarrumado e propenso a erros (esquecer um espaço).</li>
                <li><strong>Template Literals (o método moderno):</strong> <code>{'`Olá ${nome}, a tua idade é ${idade}.`'}</code>. Usam crases (<code>``</code>). É como ter um prato com espaços designados para cada ingrediente. É limpo, legível e poderoso.</li>
                <li><strong><code>.toFixed(2)</code> (o toque final):</strong> Uma "ferramenta de decoração" que podes usar em números. Pega num número como `24.48979` e formata-o para ter exatamente duas casas decimais: `"24.49"`.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Projeto Final: Calculadora de IMC Completa" icon={<ExerciseIcon />}>
            <p>Vamos juntar tudo o que aprendemos, desde pedir os dados até apresentar o resultado bem formatado.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// 1. Receber os dados (são strings)
const pesoInput = prompt("Qual é o seu peso em kg? (ex: 75)");
const alturaInput = prompt("Qual é a sua altura em metros? (ex: 1.75)");

// 2. "Traduzir" para números
const peso = Number(pesoInput);
const altura = Number(alturaInput);

// 3. Calcular com as "ferramentas"
const imc = peso / (altura ** 2);

// 4. "Empratar" o resultado
const resultadoFormatado = imc.toFixed(2);
const mensagemFinal = \`O seu IMC é \${resultadoFormatado}.\`;

// 5. Apresentar ao utilizador
alert(mensagemFinal);
console.log(mensagemFinal);`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Resumo do Módulo" icon={<SummaryIcon />}>
            <p><strong>Fantástico!</strong> Fomos passo a passo e construíste um programa completo. Agora dominas os pilares:</p>
            <ul>
                <li><strong>Comunicar</strong> com <code>alert</code>, <code>prompt</code>, <code>console.log</code>.</li>
                <li><strong>Guardar dados</strong> com segurança usando <code>const</code> e <code>let</code>.</li>
                <li><strong>Distinguir os tipos</strong> de "ingredientes" (<code>string</code>, <code>number</code>, etc.).</li>
                <li><strong>"Traduzir" entre tipos</strong> com <code>Number()</code>.</li>
                <li><strong>Calcular resultados</strong> com operadores.</li>
                <li><strong>Apresentar dados</strong> de forma limpa com Template Literals.</li>
            </ul>
        </TopicCard>
    </div>
);

const Module1 = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const lessons = [
        { id: 1, title: 'Aula 1: O Diálogo', component: <Lesson1_1 /> },
        { id: 2, title: 'Aula 2: As Caixas', component: <Lesson1_2 /> },
        { id: 3, title: 'Aula 3: Os Ingredientes', component: <Lesson1_3 /> },
        { id: 4, title: 'Aula 4: O Tradutor', component: <Lesson1_4 /> },
        { id: 5, title: 'Aula 5: As Ferramentas', component: <Lesson1_5 /> },
        { id: 6, title: 'Aula 6: A Apresentação', component: <Lesson1_6 /> },
    ];

    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {lesson.component}
        </div>
    );
};

const Lesson2_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Tomar Decisões Simples" icon={<DecisionIcon />}>
            <p><strong>Meta:</strong> Aprender a estrutura de decisão mais fundamental em programação: o <code>if/else</code>. Com ela, o nosso código deixa de ser uma sequência linear e passa a ter "bifurcações", reagindo de forma diferente a situações diferentes.</p>
        </TopicCard>
        <TopicCard title="Analogia: O Segurança da Festa" icon={<DecisionIcon />}>
            <p>Pensa num <code>if/else</code> como um segurança à porta de uma festa. Ele tem uma regra simples:</p>
            <p><strong>SE</strong> (<code>if</code>) a pessoa na fila tem um convite (a condição é <code>true</code>), então a ação é "Deixar entrar".</p>
            <p><strong>SENÃO</strong> (<code>else</code>), se a pessoa não tem convite (a condição é <code>false</code>), a ação é "Não deixar entrar".</p>
            <p>É uma escolha entre dois caminhos. O código dentro do <code>if</code> só é executado se a condição for verdadeira. Caso contrário, o código dentro do <code>else</code> é que é executado.</p>
        </TopicCard>
        <TopicCard title="Prática: Início do Jogo 'Adivinha o Número'" icon={<ExerciseIcon />}>
            <p>Vamos criar a primeira peça do nosso jogo. O programa vai "pensar" num número e nós vamos dar uma resposta binária: acertaste ou erraste.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const numeroSecreto = 42;

const palpiteString = prompt("Tenta adivinhar o número secreto:");
const palpite = Number(palpiteString);

if (palpite === numeroSecreto) {
  alert("Parabéns, acertaste!");
} else {
  alert("Errado! Não foi desta. Tenta de novo.");
}

console.log("Fim do jogo.");`}</code>
            </pre>
            <p>Testa o código. Vais ver que, dependendo do teu input, só uma das mensagens do <code>alert</code> aparece.</p>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se alterares a condição para <code>if (palpite > numeroSecreto)</code>, o que acontece se o utilizador inserir exatamente o número secreto (42)?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> O bloco <code>else</code> será executado. A condição <code>42 > 42</code> é falsa, então o programa salta o bloco <code>if</code> e executa o que está no <code>else</code>, mostrando a mensagem "Errado! Não foi desta...".</p>
        </TopicCard>
    </div>
);

const Lesson2_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Múltiplos Caminhos e Condições Compostas" icon={<DecisionIcon />}>
            <p><strong>Meta:</strong> Expandir a nossa lógica para além do sim/não. Vamos aprender a criar múltiplos caminhos com <code>else if</code> e a construir condições mais inteligentes com operadores lógicos (<code>&&</code>, <code>||</code>, <code>!</code>).</p>
        </TopicCard>
        <TopicCard title="Analogia: A Lista VIP e as Regras do Clube" icon={<DecisionIcon />}>
            <p>O nosso segurança agora tem regras mais complexas:</p>
            <ul>
                <li><strong><code>else if</code> (A Lista VIP):</strong> <strong>SE</strong> (<code>if</code>) a pessoa está na lista VIP, entra. <strong>SENÃO SE</strong> (<code>else if</code>) tem convite normal, também entra. <strong>SENÃO</strong> (<code>else</code>), não entra. O <code>else if</code> permite-nos testar várias condições em sequência.</li>
                <li><strong><code>&&</code> (E):</strong> Para entrar, precisas de ser maior de 18 <strong>E</strong> ter identificação. Ambas as partes têm de ser verdadeiras.</li>
                <li><strong><code>||</code> (OU):</strong> Para ter desconto, podes ser sócio <strong>OU</strong> ter um cupão. Basta uma das partes ser verdadeira.</li>
                <li><strong><code>!</code> (NÃO):</strong> Só podes entrar se <strong>NÃO</strong> estiveres na lista de pessoas banidas. Inverte o valor de uma condição.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Melhorar o Feedback do Jogo" icon={<ExerciseIcon />}>
            <p>Em vez de apenas "certo" ou "errado", vamos dar pistas ao jogador, usando <code>else if</code>.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const numeroSecreto = 42;
const palpite = Number(prompt("Tenta adivinhar:"));

if (palpite === numeroSecreto) {
  alert("Acertaste!");
} else if (palpite < numeroSecreto) {
  alert("O teu palpite foi muito baixo.");
} else {
  alert("O teu palpite foi muito alto.");
}

// Exemplo com &&
const idade = 20;
const temBilhete = true;
if (idade >= 18 && temBilhete) {
    console.log("Pode entrar no concerto.");
}`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Qual o resultado da expressão <code>(true && false) || !false</code>?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> <code>true</code>. Vamos por partes: <code>(true && false)</code> é <code>false</code>. <code>!false</code> é <code>true</code>. A expressão final fica <code>false || true</code>, que resulta em <code>true</code>.</p>
        </TopicCard>
    </div>
);

const Lesson2_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: O Especialista em Opções" icon={<SwitchIcon />}>
            <p><strong>Meta:</strong> Aprender a usar a instrução <code>switch</code>, uma alternativa mais limpa e organizada a uma longa cadeia de <code>if/else if</code> quando estamos a comparar uma única variável com múltiplos valores possíveis.</p>
        </TopicCard>
        <TopicCard title="Analogia: O Rececionista do Hotel" icon={<SwitchIcon />}>
            <p>Imagina uma cadeia de <code>if/else if</code> como um funcionário que te pergunta: "É o quarto 101? Não? É o 102? Não? É o 103?". É cansativo.</p>
            <p>O <code>switch</code> é um rececionista eficiente. Tu dás-lhe o número do teu quarto (a variável). Ele olha para o painel (o <code>switch</code>), encontra o teu número (o <code>case</code>) e aponta-te diretamente para o corredor certo, sem fazer mais perguntas.</p>
            <p>O <code>break</code> é crucial. É o que te faz parar no teu andar. Sem ele, continuarias a descer pelos andares seguintes (fall-through).</p>
        </TopicCard>
        <TopicCard title="Prática: Níveis de Dificuldade no Jogo" icon={<ExerciseIcon />}>
            <p>Vamos adicionar uma opção de dificuldade ao nosso jogo, que definirá o número máximo de tentativas.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const dificuldade = prompt("Escolhe a dificuldade: facil, medio, dificil");
let maxTentativas;

switch (dificuldade) {
  case "facil":
    maxTentativas = 15;
    break;
  case "medio":
    maxTentativas = 10;
    break;
  case "dificil":
    maxTentativas = 5;
    break;
  default:
    alert("Dificuldade inválida! A jogar em modo médio por defeito.");
    maxTentativas = 10;
}

alert("Tens " + maxTentativas + " tentativas!");`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> No exemplo acima, o que aconteceria se removêssemos o <code>break;</code> do <code>case "facil":</code> e o utilizador escrevesse "facil"?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> O valor de <code>maxTentativas</code> seria 10. O código entraria em <code>case "facil"</code>, definiria <code>maxTentativas = 15</code>, mas como não há <code>break</code>, ele "cairia" (fall-through) para o <code>case "medio"</code> e executaria o seu código, redefinindo <code>maxTentativas = 10</code>.</p>
        </TopicCard>
    </div>
);

const Lesson2_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Repetições Indefinidas" icon={<LoopIcon />}>
            <p><strong>Meta:</strong> Aprender a repetir blocos de código com os loops <code>while</code> e <code>do-while</code>. São perfeitos para situações onde não sabemos de antemão quantas vezes a ação precisa de ser repetida.</p>
        </TopicCard>
        <TopicCard title="Analogia: Comer a Sopa e Provar o Prato" icon={<LoopIcon />}>
            <p><strong><code>while</code> (Enquanto):</strong> É como comer sopa. <strong>ENQUANTO</strong> (<code>while</code>) a tigela tiver sopa, tu continuas a comer. A condição (ter sopa) é verificada <strong>antes</strong> de cada colherada. Se a tigela começar vazia, nem sequer dás a primeira colherada.</p>
            <p><strong><code>do-while</code> (Faz... Enquanto):</strong> É como provar um prato novo. Tu primeiro <strong>FAZES</strong> a ação (provas uma vez), e só depois avalias a condição <strong>ENQUANTO</strong> gostas para decidir se queres continuar a comer. Garante que o bloco de código é executado pelo menos uma vez.</p>
        </TopicCard>
        <TopicCard title="Prática: O Loop Principal do Jogo" icon={<ExerciseIcon />}>
            <p>Vamos usar um <code>while</code> para permitir que o jogador continue a adivinhar até acertar.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const numeroSecreto = 42;
let palpite = 0; // Inicializar com um valor que não seja o secreto

// Enquanto o palpite for diferente do número secreto, o loop continua
while (palpite !== numeroSecreto) {
  palpite = Number(prompt("Adivinha o número:"));

  if (palpite < numeroSecreto) {
    alert("Muito baixo!");
  } else if (palpite > numeroSecreto) {
    alert("Muito alto!");
  }
}

alert("Parabéns! Acertaste!");`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se quisesses garantir que um utilizador insere uma password com pelo menos 8 caracteres, pedindo repetidamente até a condição ser satisfeita, qual loop seria mais adequado: <code>while</code> ou <code>do-while</code>?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> <code>do-while</code>. Porque precisas de pedir a password (a ação) pelo menos uma vez antes de verificar o seu comprimento (a condição).</p>
        </TopicCard>
    </div>
);

const Lesson2_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Repetições Contadas e Controlo Fino" icon={<AdvancedLoopIcon />}>
            <p><strong>Meta:</strong> Dominar o loop <code>for</code>, ideal para quando sabemos o número de repetições. E aprender a controlar o fluxo dentro de qualquer loop com as palavras-chave <code>break</code> e <code>continue</code>.</p>
        </TopicCard>
        <TopicCard title="Analogia: Treino, Passadeira e Ovos Partidos" icon={<AdvancedLoopIcon />}>
            <p><strong><code>for</code> (Para):</strong> É um plano de treino completo numa só linha. "<strong>PARA</strong> (<code>for</code>) um treino que começa na repetição 1 (inicialização); continua até à repetição 10 (condição); e avança uma repetição de cada vez (incremento); faz este exercício."</p>
            <p><strong><code>break</code> (Paragem de Emergência):</strong> Estás numa passadeira rolante (loop) de 10 lojas. Na 3ª loja encontras o que queres. Puxas a alavanca <code>break</code> e sais imediatamente, ignorando as restantes 7 lojas.</p>
            <p><strong><code>continue</code> (Saltar um Passo):</strong> Estás a verificar uma caixa de 12 ovos. O 5º ovo está partido. Ignoras esse ovo (<code>continue</code>) e passas diretamente para o 6º, sem interromper a verificação dos restantes.</p>
        </TopicCard>
        <TopicCard title="Prática: Limite de Tentativas no Jogo" icon={<ExerciseIcon />}>
            <p>Vamos usar um loop <code>for</code> para dar ao jogador um número limitado de tentativas.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const numeroSecreto = 42;
const maxTentativas = 10;
let acertou = false;

for (let i = 1; i <= maxTentativas; i++) {
  const palpite = Number(prompt(\`Tentativa \${i} de \${maxTentativas}:\`));

  if (palpite === numeroSecreto) {
    alert("Parabéns! Acertaste!");
    acertou = true;
    break; // Encontrou o que queria, sai do loop!
  } else if (palpite < numeroSecreto) {
    alert("Muito baixo!");
  } else {
    alert("Muito alto!");
  }
}

// Esta verificação acontece depois do loop
if (!acertou) {
  alert(\`Fim de jogo! O número era \${numeroSecreto}.\`);
}`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se quisesses usar um loop <code>for</code> para imprimir todos os números pares de 0 a 10, como poderias usar o <code>continue</code>?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Farias um loop de 0 a 10. Dentro do loop, verificarias <code>if (i % 2 !== 0)</code> (se o número for ímpar). Se fosse verdade, chamarias <code>continue;</code> para saltar a parte da impressão e passar para o próximo número.</p>
        </TopicCard>
    </div>
);

const Lesson2_6 = () => (
    <div className="space-y-8">
        <TopicCard title="Resumo do Módulo: O Kit de Ferramentas do Controlo de Fluxo" icon={<SummaryIcon />}>
            <p><strong>Parabéns!</strong> Concluíste o módulo mais importante para dar "inteligência" ao teu código. Agora tens um kit de ferramentas completo para controlar como e quando o teu código é executado.</p>
            <p><strong>Quando usar o quê?</strong></p>
            <ul>
                <li><strong><code>if/else if/else</code></strong>: Para tomar decisões com um ou vários caminhos baseados em condições variadas. É a ferramenta mais flexível.</li>
                <li><strong><code>switch</code></strong>: Ideal quando tens <strong>uma</strong> variável e queres compará-la com <strong>vários valores exatos</strong> (ex: 'facil', 'medio', 'dificil'). Mais limpo que muitos <code>else if</code>.</li>
                <li><strong><code>while</code></strong>: Para repetir algo um número <strong>indefinido</strong> de vezes, enquanto uma condição for verdadeira. A condição é testada <strong>antes</strong>.</li>
                <li><strong><code>do-while</code></strong>: Igual ao <code>while</code>, mas garante que o código é executado <strong>pelo menos uma vez</strong> antes de testar a condição.</li>
                <li><strong><code>for</code></strong>: Para repetir algo um número <strong>definido</strong> de vezes. Perfeito para contagens ou iterar sobre algo com um início e fim conhecidos.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Projeto Final: Jogo 'Adivinha o Número' Completo" icon={<ExerciseIcon />}>
            <p>Aqui está a versão final do nosso jogo, juntando os conceitos de várias aulas.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// --- Configuração do Jogo ---
const dificuldade = prompt("Escolhe a dificuldade: facil, medio, dificil");
let maxTentativas;
let numeroMaximo;

switch (dificuldade) {
  case "facil":
    maxTentativas = 15;
    numeroMaximo = 50;
    break;
  case "dificil":
    maxTentativas = 5;
    numeroMaximo = 200;
    break;
  default: // "medio" ou qualquer outra coisa
    maxTentativas = 10;
    numeroMaximo = 100;
}

const numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let acertou = false;

alert(\`Adivinha o número entre 1 e \${numeroMaximo}. Tens \${maxTentativas} tentativas!\`);

// --- Loop Principal do Jogo ---
for (let i = 1; i <= maxTentativas; i++) {
  const palpiteString = prompt(\`Tentativa \${i} de \${maxTentativas}:\`);
  
  // Validação do input
  if (palpiteString === null) { // Utilizador clicou em "Cancelar"
    alert("Jogo cancelado.");
    break; 
  }

  const palpite = Number(palpiteString);

  if (palpite === numeroSecreto) {
    alert("Parabéns! Acertaste no número " + numeroSecreto + "!");
    acertou = true;
    break;
  } else if (palpite < numeroSecreto) {
    alert("Muito baixo!");
  } else {
    alert("Muito alto!");
  }
}

// --- Fim de Jogo ---
if (!acertou) {
  alert("Fim de jogo! O número secreto era " + numeroSecreto + ".");
}`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Próximos Passos" icon={<SummaryIcon />}>
            <p>Com o controlo de fluxo dominado, o próximo passo é aprender a organizar e reutilizar o nosso código de forma eficiente. Prepara-te para o Módulo 3: <strong>Funções e Scope</strong>, onde o teu código se tornará muito mais poderoso e modular!</p>
        </TopicCard>
    </div>
);


const Module2 = () => {
    const [activeLesson, setActiveLesson] = useState(1);

    const lessons = [
        { id: 1, title: 'Aula 1: Decisões Simples', component: <Lesson2_1 /> },
        { id: 2, title: 'Aula 2: Decisões Múltiplas', component: <Lesson2_2 /> },
        { id: 3, title: 'Aula 3: O Especialista', component: <Lesson2_3 /> },
        { id: 4, title: 'Aula 4: Repetições Indefinidas', component: <Lesson2_4 /> },
        { id: 5, title: 'Aula 5: Repetições Contadas', component: <Lesson2_5 /> },
        { id: 6, title: 'Aula 6: Resumo e Projeto', component: <Lesson2_6 /> },
    ];

    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {lesson.component}
        </div>
    );
};

const Lesson3_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Receita do Código" icon={<FunctionIcon />}>
            <p><strong>Meta:</strong> Entender as duas formas principais de criar funções (as "receitas" do nosso código) e a diferença subtil, mas importante, de como o JavaScript as "lê" (hoisting).</p>
        </TopicCard>
        <TopicCard title="Analogia: Livro de Receitas vs. Post-it" icon={<FunctionIcon />}>
            <p>Pensa em funções de duas maneiras:</p>
            <ul>
                <li><strong>Declaração de Função:</strong> É uma <strong>receita com nome no índice de um livro</strong>. Podes folhear para o índice e saber que a receita "Bolo de Chocolate" existe, mesmo antes de chegares à página dela. Em JavaScript, isto chama-se <strong>hoisting</strong> (içamento). A função é "içada" para o topo e podes chamá-la antes de a declarares.</li>
                <li><strong>Expressão de Função:</strong> É uma <strong>receita escrita num post-it e colada numa variável</strong>. Só ficas a saber da existência da receita quando chegas à página onde o post-it está colado. Se tentares usá-la antes, o programa não sabe do que estás a falar.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Ver o Hoisting em Ação" icon={<ExerciseIcon />}>
            <p>Vamos testar esta diferença na consola.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// --- Declaração de Função (Funciona!) ---
saudacaoDeclaracao(); // Chamada ANTES da declaração

function saudacaoDeclaracao() {
  console.log("Olá! Sou uma declaração!");
}

// --- Expressão de Função (Dá erro!) ---
// Tenta descomentar a linha abaixo para ver o erro
// saudacaoExpressao(); 

const saudacaoExpressao = function() {
  console.log("Olá! Sou uma expressão!");
};

saudacaoExpressao(); // Chamada DEPOIS, aqui já funciona.`}</code>
            </pre>
            <p><strong>Regra de ouro:</strong> Para evitar confusão, declara as tuas funções antes de as usares. A consistência torna o código mais fácil de ler.</p>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Porque é que a chamada `saudacaoExpressao()` antes da sua definição dá um `ReferenceError` (ou `TypeError` se usares `var`)?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Porque as Expressões de Função não são "içadas" (hoisted). A variável `saudacaoExpressao` existe, mas o seu valor (a função em si) só é atribuído na linha da definição. Tentar executá-la antes é como tentar ler um post-it que ainda não foi colado na página.</p>
        </TopicCard>
    </div>
);

const Lesson3_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Ingredientes e Pratos Finais" icon={<FunctionIcon />}>
            <p><strong>Meta:</strong> Aprender a passar dados para dentro de uma função (parâmetros) e como uma função nos pode devolver um resultado (<code>return</code>). É isto que torna as funções verdadeiramente dinâmicas e úteis.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Máquina de Sumos" icon={<FunctionIcon />}>
            <p>Uma função é como uma máquina de sumos:</p>
            <ul>
                <li><strong>Parâmetros:</strong> São os <strong>ingredientes</strong> que colocas na máquina (ex: `laranjas`, `cenouras`). São as variáveis que a função recebe para trabalhar.</li>
                <li><strong>Corpo da Função:</strong> É o <strong>processo interno</strong> da máquina, onde ela espreme e mistura os ingredientes.</li>
                <li><strong><code>return</code>:</strong> É o <strong>sumo</strong> que sai no final. É o resultado do trabalho da função. Se uma função não tiver um <code>return</code> explícito, ela devolve <code>undefined</code> (a máquina trabalhou, mas não saiu nada).</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Função de Depósito no Multibanco" icon={<ExerciseIcon />}>
            <p>Vamos criar a primeira funcionalidade do nosso multibanco: depositar dinheiro.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`let saldoDaConta = 100; // O nosso saldo inicial

// A função recebe o saldo atual e o valor a depositar como "ingredientes"
function depositar(saldoAtual, valor) {
  const novoSaldo = saldoAtual + valor;
  // A função devolve o "prato final", o novo saldo calculado
  return novoSaldo;
}

console.log("Saldo antes:", saldoDaConta); // 100

// Chamamos a função e guardamos o resultado que ela nos devolveu
saldoDaConta = depositar(saldoDaConta, 50);

console.log("Saldo depois:", saldoDaConta); // 150`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Considera a função <code>{'function alertar(msg) { alert(msg); }'}</code>. Qual é o valor de <code>{'const resultado = alertar("Olá");'}</code>?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> <code>undefined</code>. A função <code>alertar</code> executa uma ação (mostra um alerta), mas não tem uma instrução <code>return</code>. Por isso, ela devolve o valor por defeito, que é <code>undefined</code>.</p>
        </TopicCard>
    </div>
);

const Lesson3_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: As Paredes Invisíveis do Código" icon={<ScopeIcon />}>
            <p><strong>Meta:</strong> Entender o conceito de Escopo (Scope). Saber onde as tuas variáveis "vivem" e quem as consegue "ver" é fundamental para evitar erros e escrever código organizado.</p>
        </TopicCard>
        <TopicCard title="Analogia: As Divisões de uma Casa" icon={<ScopeIcon />}>
            <p>Pensa no teu código como uma casa com várias divisões:</p>
            <ul>
                <li><strong>Escopo Global (O Jardim):</strong> Variáveis declaradas fora de qualquer função. Toda a gente na casa (qualquer função) consegue vê-las e mexer nelas. É útil, mas perigoso - muita coisa no jardim pode ficar desarrumada.</li>
                <li><strong>Escopo de Função (O Quarto):</strong> Variáveis declaradas dentro de uma função. Só quem está dentro desse quarto as consegue ver. São privadas e seguras.</li>
                <li><strong>Escopo de Bloco (A Gaveta):</strong> Variáveis declaradas com `let` ou `const` dentro de um bloco `{}` (como um `if` ou `for`). São ainda mais privadas, só existem dentro daquela gaveta específica.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Ver as Paredes em Ação" icon={<ExerciseIcon />}>
            <p>Vamos declarar variáveis com o mesmo nome em escopos diferentes e ver qual delas é acessível.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const titular = "Ana"; // Global Scope (Jardim)

function operacaoBancaria() {
  const titular = "Rui"; // Function Scope (Quarto)
  const saldo = 500;
  console.log("Dentro da função, o titular é:", titular); // Rui

  if (saldo > 100) {
    const titular = "Marta"; // Block Scope (Gaveta)
    console.log("Dentro do if, o titular é:", titular); // Marta
  }
}

operacaoBancaria();
console.log("Fora da função, o titular é:", titular); // Ana

// Tentar aceder a 'saldo' aqui fora daria um erro, porque está trancada no "quarto".`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Porque é que é considerado uma má prática usar muitas variáveis globais?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Porque qualquer parte do teu código pode alterá-las, talvez por acidente. Isto torna o código imprevisível e difícil de depurar. É como deixar as chaves de casa no jardim - qualquer um pode pegá-las.</p>
        </TopicCard>
    </div>
);

const Lesson3_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Memória Secreta das Funções" icon={<ClosureIcon />}>
            <p><strong>Meta:</strong> Entender o conceito de *Closure* (fecho). É um dos conceitos mais poderosos (e por vezes confusos) de JavaScript. Permite que uma função se "lembre" do ambiente onde foi criada.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Receita com o Ingrediente Secreto" icon={<ClosureIcon />}>
            <p>Imagina uma chef famosa que cria uma receita para um molho especial dentro da sua cozinha privada. A receita usa um "ingrediente secreto" que só existe naquela cozinha.</p>
            <ul>
                <li>A <strong>cozinha</strong> é a função exterior (`criarConta`).</li>
                <li>O <strong>ingrediente secreto</strong> é uma variável local (`saldo`).</li>
                <li>A <strong>receita</strong> é uma função interior (`verSaldo`, `depositar`).</li>
            </ul>
            <p>A chef depois dá-te uma cópia da receita. Mesmo que leves a receita para a tua casa, ela continua a referenciar o ingrediente secreto da cozinha original. A receita tem uma "memória" da cozinha onde foi criada. Isso é uma *closure*.</p>
        </TopicCard>
        <TopicCard title="Prática: Criar uma Conta Bancária Segura" icon={<ExerciseIcon />}>
            <p>Com closures, podemos criar um saldo que não pode ser alterado por fora, apenas através das nossas funções.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`function criarConta(saldoInicial) {
  let saldo = saldoInicial; // "Ingrediente secreto"

  // Devolvemos as "receitas" que se lembram do saldo
  return {
    verSaldo: function() {
      return saldo;
    },
    depositar: function(valor) {
      saldo = saldo + valor;
      return saldo;
    },
    levantar: function(valor) {
      if (valor <= saldo) {
        saldo = saldo - valor;
        return saldo;
      } else {
        return "Saldo insuficiente";
      }
    }
  };
}

const minhaConta = criarConta(100);

console.log(minhaConta.verSaldo()); // 100
minhaConta.depositar(50);
console.log(minhaConta.verSaldo()); // 150

// Não conseguimos fazer isto! O saldo está protegido.
// minhaConta.saldo = 5000; // Não funciona`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se criasses duas contas (`const contaA = criarConta(100); const contaB = criarConta(500);`), elas partilham o mesmo `saldo`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Não. Cada chamada a `criarConta` cria uma nova "cozinha" com o seu próprio "ingrediente secreto" (`saldo`). A `contaA` e a `contaB` têm closures independentes e cada uma lembra-se do seu próprio `saldo`.</p>
        </TopicCard>
    </div>
);

const Lesson3_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Forma Moderna e Concisa" icon={<ArrowFunctionIcon />}>
            <p><strong>Meta:</strong> Aprender a sintaxe das *Arrow Functions* (Funções Seta). Elas oferecem uma forma mais curta e limpa de escrever funções, especialmente as mais simples.</p>
        </TopicCard>
        <TopicCard title="Analogia: Receita Tradicional vs. SMS" icon={<ArrowFunctionIcon />}>
            <p>Pensa nisto como duas formas de partilhar uma receita:</p>
            <ul>
                <li><strong>Função Tradicional:</strong> <code>{`function somar(a, b) { return a + b; }`}</code>. É a receita completa, bem formatada, com todos os detalhes.</li>
                <li><strong>Arrow Function:</strong> <code>{`(a, b) => a + b;`}</code>. É a versão SMS da receita. Direta, curta e ideal para quando a ideia é simples. O `function` desaparece e a seta `=>` separa os parâmetros do corpo. Se for só uma linha, o `return` é implícito!</li>
            </ul>
        </TopicCard>
        <TopicCard title="Projeto Final: Simulador de Multibanco Completo" icon={<ExerciseIcon />}>
            <p>Vamos construir a interface do nosso multibanco, usando as funções da conta que criámos na aula anterior e uma arrow function para o menu.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// Funções da conta (da aula anterior)
function criarConta(saldoInicial) {
  let saldo = saldoInicial;

  return {
    verSaldo: () => saldo,
    depositar: (valor) => saldo += valor,
    levantar: (valor) => {
      if (valor <= saldo) {
        saldo -= valor;
        return saldo;
      }
      return "Saldo insuficiente";
    },
  };
}

const minhaConta = criarConta(200);
let continuar = true;

while (continuar) {
  const escolha = prompt(
    "Escolha uma opção:\\n1. Ver Saldo\\n2. Depositar\\n3. Levantar\\n4. Sair"
  );

  switch (escolha) {
    case "1":
      alert(\`O seu saldo é: \${minhaConta.verSaldo()}€\`);
      break;
    case "2":
      const valorDeposito = Number(prompt("Valor a depositar:"));
      minhaConta.depositar(valorDeposito);
      break;
    case "3":
      const valorLevantar = Number(prompt("Valor a levantar:"));
      alert(\`Novo saldo: \${minhaConta.levantar(valorLevantar)}\`);
      break;
    case "4":
      continuar = false;
      break;
    default:
      alert("Opção inválida.");
  }
}

alert("Obrigado por usar o nosso multibanco!");`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Resumo do Módulo" icon={<SummaryIcon />}>
            <p><strong>Excelente trabalho!</strong> As funções são o alicerce de qualquer aplicação JavaScript complexa. Agora sabes:</p>
            <ul>
                <li>Criar funções reutilizáveis.</li>
                <li>Passar dados com <strong>parâmetros</strong> e obter resultados com <strong><code>return</code></strong>.</li>
                <li>Proteger as tuas variáveis com <strong>escopo</strong>.</li>
                <li>Criar dados privados e "com memória" usando <strong>closures</strong>.</li>
                <li>Escrever funções de forma concisa com <strong>Arrow Functions</strong>.</li>
            </ul>
        </TopicCard>
    </div>
);


const Module3 = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const lessons = [
        { id: 1, title: 'Aula 1: A Receita', component: <Lesson3_1 /> },
        { id: 2, title: 'Aula 2: Ingredientes', component: <Lesson3_2 /> },
        { id: 3, title: 'Aula 3: As Paredes', component: <Lesson3_3 /> },
        { id: 4, title: 'Aula 4: A Memória', component: <Lesson3_4 /> },
        { id: 5, title: 'Aula 5: A Forma Moderna', component: <Lesson3_5 /> },
    ];

    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {lesson.component}
        </div>
    );
};

const Lesson4_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: As Listas de Compras do Código" icon={<ArrayIcon />}>
            <p><strong>Meta:</strong> Aprender a criar e manipular a estrutura de dados mais comum: o Array. Vamos aprender a adicionar, remover e aceder a elementos numa lista ordenada.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Lista de Compras em Papel" icon={<ArrayIcon />}>
            <p>Um Array é como uma <strong>lista de compras numerada</strong>. Cada item tem uma posição (o seu <strong>índice</strong>), e esta ordem é importante. E a primeira regra importante: <strong>a contagem começa sempre no zero!</strong></p>
            <ul>
                <li><strong><code>const lista = ['pão', 'leite'];</code></strong>: Escrever a lista inicial.</li>
                <li><strong><code>lista[0]</code></strong>: Ler o primeiro item da lista (pão).</li>
                <li><strong><code>lista.push('ovos')</code></strong>: Adicionar um item ao <strong>fim</strong> da lista.</li>
                <li><strong><code>lista.pop()</code></strong>: Riscar o <strong>último</strong> item da lista.</li>
                <li><strong><code>lista.length</code></strong>: Ver quantos itens tens na lista.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Iniciar o Carrinho de Compras" icon={<ExerciseIcon />}>
            <p>Vamos criar o nosso primeiro carrinho de compras e fazer algumas operações básicas.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// 1. Criar um carrinho vazio
const carrinho = [];

// 2. Adicionar alguns itens
carrinho.push('Maçãs');
carrinho.push('Pão de Forma');
carrinho.push('Leite');

console.log('Carrinho atual:', carrinho); // ['Maçãs', 'Pão de Forma', 'Leite']

// 3. Aceder ao segundo item (índice 1)
console.log('O segundo item é:', carrinho[1]); // Pão de Forma

// 4. O cliente arrependeu-se do último item
const ultimoItem = carrinho.pop();
console.log(ultimoItem + ' foi removido.'); // Leite foi removido.
console.log('Carrinho final:', carrinho); // ['Maçãs', 'Pão de Forma']`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se tiveres a lista `const cores = ['vermelho', 'verde', 'azul']`, como acedes à cor 'azul'?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `cores[2]`. Lembra-te, a contagem começa em zero, por isso o primeiro item é `cores[0]`, o segundo é `cores[1]`, e o terceiro é `cores[2]`.</p>
        </TopicCard>
    </div>
);

const Lesson4_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Os Catálogos de Produtos" icon={<ObjectIcon />}>
            <p><strong>Meta:</strong> Aprender a usar Objetos para agrupar dados relacionados. Vamos evoluir o nosso carrinho de uma simples lista de nomes para uma estrutura que guarda nome, preço e quantidade.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Etiqueta do Produto" icon={<ObjectIcon />}>
            <p>Se um Array é uma lista, um Objeto é como a <strong>etiqueta de um produto na prateleira</strong>. Não tem uma ordem, mas agrupa várias informações sobre uma única coisa. Cada informação tem um nome (a <strong>chave</strong>) e um valor.</p>
            <p>Em vez de `['Maçãs', 1.50, 6]`, que é ambíguo, usamos um objeto:</p>
            <pre className="bg-slate-950 rounded-md p-2 text-sm"><code>{`const produto = {
  nome: 'Maçãs',
  preco: 1.50,
  quantidade: 6
};`}</code></pre>
            <p>Para aceder à informação, usamos a "notação de ponto": `produto.nome` ou `produto.preco`.</p>
        </TopicCard>
        <TopicCard title="Prática: Melhorar o Carrinho com Objetos" icon={<ExerciseIcon />}>
            <p>Vamos transformar o nosso array de strings num array de objetos, o que é muito mais útil na vida real.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const carrinho = [
  { nome: 'Maçãs', preco: 1.50, quantidade: 2 },
  { nome: 'Pão de Forma', preco: 2.00, quantidade: 1 },
  { nome: 'Leite', preco: 0.80, quantidade: 1 }
];

// Aceder ao nome do segundo produto
console.log(carrinho[1].nome); // "Pão de Forma"

// Calcular o custo total do primeiro produto
const custoMacas = carrinho[0].preco * carrinho[0].quantidade;
console.log(\`O custo total das maçãs é \${custoMacas.toFixed(2)}€\`); // 3.00€

// Adicionar um novo produto ao carrinho
carrinho.push({ nome: 'Café', preco: 4.50, quantidade: 1 });

console.log(carrinho);`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Tens um objeto `const utilizador = { nome: 'Ana', idade: 30 }`. Como alteras a idade para 31?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `utilizador.idade = 31;`. Podes ler e reatribuir valores das propriedades de um objeto da mesma forma que farias com uma variável normal, usando a notação de ponto.</p>
        </TopicCard>
    </div>
);

const Lesson4_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Linha de Montagem" icon={<IterationIcon />}>
            <p><strong>Meta:</strong> Aprender a usar os métodos de iteração `map` e `filter` para transformar e filtrar arrays de forma declarativa, sem precisar de loops `for`.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Fábrica de Produtos" icon={<IterationIcon />}>
            <p>Pensa no teu array como uma caixa de matérias-primas que entra numa fábrica.</p>
            <ul>
                <li><strong><code>.map()</code> (A Transformadora):</strong> É uma <strong>linha de montagem</strong> que pega em cada item, aplica-lhe uma transformação (ex: pinta-o, embala-o) e coloca o item transformado numa nova caixa. A nova caixa tem sempre <strong>o mesmo número de itens</strong> que a original.</li>
                <li><strong><code>.filter()</code> (O Controlo de Qualidade):</strong> É um <strong>inspetor</strong> que examina cada item. Apenas os que passam no teste (a condição retorna `true`) são colocados na nova caixa. A nova caixa pode ter <strong>menos itens</strong> (ou o mesmo número, se todos passarem).</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Gerir o Carrinho com Eficiência" icon={<ExerciseIcon />}>
            <p>Vamos usar `map` para extrair uma lista de nomes e `filter` para encontrar produtos caros.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const carrinho = [
  { nome: 'Maçãs', preco: 1.50 },
  { nome: 'Pão de Forma', preco: 2.00 },
  { nome: 'Café', preco: 4.50 },
  { nome: 'Leite', preco: 0.80 }
];

// Usar .map() para criar uma lista só com os nomes dos produtos
const nomesDosProdutos = carrinho.map(produto => produto.nome);
console.log(nomesDosProdutos); // ['Maçãs', 'Pão de Forma', 'Café', 'Leite']

// Usar .filter() para encontrar produtos que custam mais de 1.80€
const produtosCaros = carrinho.filter(produto => produto.preco > 1.80);
console.log(produtosCaros); // [{ nome: 'Pão de Forma', ...}, { nome: 'Café', ...}]`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Queres criar um novo array com os preços do carrinho, mas com 10% de desconto já aplicado. Qual método usarias, `map` ou `filter`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `map`. Porque queres <strong>transformar</strong> cada item do array original (pegar no preço e calcular o desconto) e o novo array terá o mesmo número de elementos. A operação seria `carrinho.map(p => p.preco * 0.9)`.</p>
        </TopicCard>
    </div>
);

const Lesson4_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: O Contabilista do Código" icon={<ReduceIcon />}>
            <p><strong>Meta:</strong> Dominar o método `reduce`, o mais poderoso dos métodos de iteração, para "reduzir" um array a um único valor. É a ferramenta perfeita para somas, médias ou qualquer cálculo cumulativo.</p>
        </TopicCard>
        <TopicCard title="Analogia: O Chef a Fazer Sopa" icon={<ReduceIcon />}>
            <p>O método `reduce` é como um chef a fazer uma sopa. Ele tem:</p>
            <ul>
                <li><strong>Uma panela vazia (o acumulador):</strong> É o valor que começa (normalmente `0` para somas) e que vai sendo "acumulado".</li>
                <li><strong>Uma mesa de ingredientes (o array):</strong> Os itens que ele vai processar.</li>
            </ul>
            <p>O chef pega no primeiro ingrediente, junta-o ao que está na panela. Depois pega no segundo, e junta ao resultado que já lá estava. Ele repete este processo, um a um, até todos os ingredientes estarem na panela. No final, o que ele devolve não é uma lista de ingredientes, mas sim <strong>uma única panela de sopa</strong> (o valor final).</p>
        </TopicCard>
        <TopicCard title="Prática: Calcular o Total do Carrinho" icon={<ExerciseIcon />}>
            <p>Este é o uso clássico do `reduce`: somar o custo total dos itens no carrinho.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const carrinho = [
  { nome: 'Maçãs', preco: 1.50, quantidade: 2 },       // Custo: 3.00
  { nome: 'Pão de Forma', preco: 2.00, quantidade: 1 }, // Custo: 2.00
  { nome: 'Café', preco: 4.50, quantidade: 1 }         // Custo: 4.50
];

// reduce( (acumulador, itemAtual) => { ... }, valorInicialDoAcumulador )
const total = carrinho.reduce((soma, produto) => {
  const custoItem = produto.preco * produto.quantidade;
  return soma + custoItem;
}, 0); // Começamos a nossa "panela" (soma) com 0

console.log(\`O total do carrinho é: \${total.toFixed(2)}€\`); // O total do carrinho é: 9.50€`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> No exemplo acima, qual é o valor da variável `soma` na primeira vez que a função dentro do `reduce` é executada?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> `0`. O segundo argumento do `reduce` é o valor inicial do acumulador. Na primeira iteração, `soma` é `0` e `produto` é o objeto das 'Maçãs'. A função retorna `0 + 3.00`, e esse `3.00` será o valor de `soma` na segunda iteração.</p>
        </TopicCard>
    </div>
);

const Lesson4_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Os Desempacotadores Mágicos" icon={<DestructuringIcon />}>
            <p><strong>Meta:</strong> Aprender sintaxe moderna (ES6+) para extrair dados de arrays e objetos de forma mais limpa (Destructuring) e para copiar ou combinar dados (Spread/Rest).</p>
        </TopicCard>
        <TopicCard title="Analogia: Desfazer as Malas e Fotocopiar Documentos" icon={<DestructuringIcon />}>
            <p><strong>Destructuring (Desestruturação):</strong> É como <strong>desfazer uma mala</strong>. Em vez de dizer "tira o primeiro item, que são as calças; tira o segundo, que é a camisola", tu simplesmente dizes "quero as `calcas` e a `camisola`" e tiras-as diretamente, pelo nome (para objetos) ou pela posição (para arrays).</p>
            <p><strong>Spread Operator (`...`):</strong> É como usar uma <strong>fotocopiadora</strong>. Pega num documento (array ou objeto) e espalha (spread) todas as suas páginas numa nova pilha de papel. Útil para fazer cópias ou juntar documentos.</p>
        </TopicCard>
        <TopicCard title="Projeto Final: Funções do Carrinho de Compras" icon={<ExerciseIcon />}>
            <p>Vamos juntar tudo e criar funções utilitárias para o nosso carrinho, usando estas novas sintaxes.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const carrinhoInicial = [
  { id: 1, nome: 'Maçãs', preco: 1.50 },
  { id: 2, nome: 'Leite', preco: 0.80 },
];

// Função para adicionar um item de forma "imutável" (sem alterar o original)
const adicionarItem = (carrinho, item) => {
  // Usamos o spread operator para "espalhar" os itens antigos num novo array
  return [...carrinho, item]; 
};

const novoProduto = { id: 3, nome: 'Café', preco: 4.50 };
const carrinhoAtualizado = adicionarItem(carrinhoInicial, novoProduto);

// Função que usa destructuring para mostrar um produto
const mostrarProduto = (produto) => {
  // Em vez de produto.nome, produto.preco...
  const { nome, preco } = produto; 
  console.log(\`- \${nome}: \${preco.toFixed(2)}€\`);
};

carrinhoAtualizado.forEach(mostrarProduto);`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Resumo do Módulo" icon={<SummaryIcon />}>
            <p><strong>Conseguiste!</strong> Agora já não trabalhas com dados soltos, mas sim com estruturas organizadas. Dominas:</p>
            <ul>
                <li><strong>Arrays:</strong> Para listas ordenadas de dados.</li>
                <li><strong>Objetos:</strong> Para agrupar informações sobre uma única entidade.</li>
                <li><strong><code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>:</strong> O trio de ouro para manipular arrays de forma moderna e declarativa.</li>
                <li><strong>Destructuring e Spread:</strong> Sintaxe limpa para trabalhar com arrays e objetos de forma mais eficiente.</li>
            </ul>
        </TopicCard>
    </div>
);

const Module4 = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const lessons = [
        { id: 1, title: 'Aula 1: As Listas', component: <Lesson4_1 /> },
        { id: 2, title: 'Aula 2: Os Catálogos', component: <Lesson4_2 /> },
        { id: 3, title: 'Aula 3: A Fábrica', component: <Lesson4_3 /> },
        { id: 4, title: 'Aula 4: O Contabilista', component: <Lesson4_4 /> },
        { id: 5, title: 'Aula 5: Os Desempacotadores', component: <Lesson4_5 /> },
    ];
    
    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {lesson.component}
        </div>
    );
};

const Lesson5_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: As Fábricas e as Plantas" icon={<FactoryIcon />}>
            <p><strong>Meta:</strong> Aprender os dois padrões clássicos para criar múltiplos objetos do mesmo "tipo": as *Factory Functions* e as *Constructor Functions*. Esta é a nossa introdução à ideia de criar objetos de forma programática.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Fábrica de Brinquedos vs. a Planta de um Carro" icon={<FactoryIcon />}>
            <p>Imagina que queres produzir muitos objetos iguais, como sprites para um jogo.</p>
            <ul>
                <li><strong>Factory Function (A Fábrica):</strong> É uma função que, quando chamada, <strong>constrói e devolve um objeto novo</strong>. É como uma máquina numa fábrica de brinquedos: carregas no botão e sai um boneco pronto. Não te preocupas com os detalhes internos, apenas queres o produto final.</li>
                <li><strong>Constructor Function (A Planta):</strong> É uma <strong>planta de engenharia</strong> para construir um carro. Não é o carro em si, mas sim o plano. A palavra-chave <code>new</code> é a "equipa de construção" que lê a planta e monta um carro novo e único (uma <strong>instância</strong>). Por convenção, o nome das plantas (constructors) começa com letra maiúscula.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Criar o Nosso Primeiro Sprite" icon={<ExerciseIcon />}>
            <p>Vamos criar um objeto `sprite` (um elemento gráfico num jogo) usando os dois métodos.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// --- 1. Factory Function ---
function criarSprite(x, y, imagem) {
  return {
    x: x,
    y: y,
    imagem: imagem,
    desenhar: function() {
      console.log(\`A desenhar \${this.imagem} em (\${this.x}, \${this.y})\`);
    }
  };
}
const fantasma = criarSprite(50, 50, 'fantasma.png');
fantasma.desenhar(); // A desenhar fantasma.png em (50, 50)

// --- 2. Constructor Function ---
function Sprite(x, y, imagem) {
  // 'this' refere-se ao objeto novo e vazio que 'new' criou
  this.x = x;
  this.y = y;
  this.imagem = imagem;
  this.desenhar = function() {
    console.log(\`A desenhar \${this.imagem} em (\${this.x}, \${this.y})\`);
  }
}
// 'new' é a magia que cria o objeto e o liga ao 'this'
const jogador = new Sprite(0, 100, 'jogador.png');
jogador.desenhar(); // A desenhar jogador.png em (0, 100)`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> No exemplo da *Constructor Function*, o que aconteceria se te esquecesses de usar a palavra-chave <code>new</code> ao chamar <code>Sprite</code>?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Seria um desastre! Sem o <code>new</code>, o <code>this</code> dentro da função apontaria para o objeto global (<code>window</code> no navegador). Acabarias por criar variáveis globais <code>window.x</code>, <code>window.y</code>, etc., o que é uma má prática terrível. É por isso que os nomes dos construtores começam com maiúscula, para nos lembrar de usar o <code>new</code>.</p>
        </TopicCard>
    </div>
);

const Lesson5_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: O ADN Partilhado" icon={<PrototypeIcon />}>
            <p><strong>Meta:</strong> Entender o mecanismo de *Prototypes*. É a forma como o JavaScript implementa a herança e permite que objetos partilhem métodos, poupando imensa memória.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Caixa de Ferramentas Comunitária" icon={<PrototypeIcon />}>
            <p>Na aula anterior, cada sprite que criámos com o construtor tinha a sua própria cópia da função <code>desenhar</code>. Se criarmos 1000 sprites, teremos 1000 cópias dessa função na memória! Não é eficiente.</p>
            <p>O <strong>Prototype</strong> é como uma <strong>caixa de ferramentas comunitária</strong> para todos os objetos criados a partir da mesma planta (Constructor). Em vez de cada objeto ter a sua própria ferramenta, todos sabem onde ir buscá-la quando precisam.</p>
            <p>Quando chamas <code>jogador.desenhar()</code>, o JavaScript primeiro procura a ferramenta "desenhar" na "mochila" do próprio `jogador`. Se não encontrar, ele segue uma "corrente" (a *prototype chain*) e vai procurar na caixa de ferramentas comunitária do <code>Sprite.prototype</code>.</p>
        </TopicCard>
        <TopicCard title="Prática: Otimizar os Nossos Sprites" icon={<ExerciseIcon />}>
            <p>Vamos refatorar o nosso construtor para mover o método <code>desenhar</code> para o `prototype`.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`function Sprite(x, y, imagem) {
  this.x = x;
  this.y = y;
  this.imagem = imagem;
}

// Adicionamos a ferramenta à "caixa de ferramentas" partilhada
Sprite.prototype.desenhar = function() {
  console.log(\`A desenhar \${this.imagem} em (\${this.x}, \${this.y})\`);
};

const jogador = new Sprite(0, 100, 'jogador.png');
const inimigo = new Sprite(200, 100, 'inimigo.png');

jogador.desenhar(); // Funciona!
inimigo.desenhar(); // Funciona!

// O jogador não tem o método "desenhar" diretamente.
console.log(jogador.hasOwnProperty('desenhar')); // false
// Mas o seu protótipo tem!
console.log(Sprite.prototype.hasOwnProperty('desenhar')); // true`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se, depois de criares os objetos `jogador` e `inimigo`, adicionares um novo método ao protótipo, como <code>Sprite.prototype.mover = function() { this.x += 1; }</code>, esses objetos já existentes terão acesso ao novo método?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Sim! Isto é o poder da *prototype chain*. Como os objetos não têm o método, eles vão procurá-lo na "caixa de ferramentas" partilhada no momento em que o método é chamado. Como a caixa foi atualizada, eles encontram a nova ferramenta.</p>
        </TopicCard>
    </div>
);

const Lesson5_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Planta Moderna" icon={<ClassIcon />}>
            <p><strong>Meta:</strong> Aprender a sintaxe de <strong>Classes</strong> do ES6. É uma forma muito mais limpa, moderna e intuitiva de fazer exatamente o que vínhamos a fazer com Construtores e Prototypes.</p>
        </TopicCard>
        <TopicCard title="Analogia: O Açúcar Sintático" icon={<ClassIcon />}>
            <p>Pensa nas Classes como uma <strong>capa bonita e organizada</strong> para o sistema de Construtores e Prototypes. Por baixo do capô, o motor é exatamente o mesmo, mas a "carroçaria" é muito mais fácil de ler e entender.</p>
            <p>A sintaxe <code>class</code> junta a "planta" (o `constructor`) e as "ferramentas na caixa comunitária" (os métodos) num só sítio, em vez de estarem espalhados pelo código. A isto chama-se <strong>"açúcar sintático"</strong> (*syntactic sugar*), porque torna a "comida" (o código) mais agradável sem mudar os "ingredientes" (o funcionamento).</p>
        </TopicCard>
        <TopicCard title="Prática: Refatorar o Sprite para uma Classe" icon={<ExerciseIcon />}>
            <p>Vamos converter o nosso código anterior para a sintaxe de classe.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`class Sprite {
  // O 'constructor' é uma função especial que é chamada quando usamos 'new'
  constructor(x, y, imagem) {
    this.x = x;
    this.y = y;
    this.imagem = imagem;
  }

  // Métodos definidos aqui são automaticamente colocados no .prototype!
  desenhar() {
    console.log(\`A desenhar \${this.imagem} em (\${this.x}, \${this.y})\`);
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(\`\${this.imagem} moveu-se para (\${this.x}, \${this.y})\`);
  }
}

// A utilização é exatamente a mesma
const jogador = new Sprite(0, 100, 'jogador.png');
jogador.desenhar();
jogador.mover(10, 5);`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Uma Classe em JavaScript é um conceito fundamentalmente novo e diferente dos Prototypes?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Não. É apenas "açúcar sintático". A sintaxe <code>class</code> não introduz um novo modelo de herança em JavaScript. Ela simplesmente oferece uma maneira mais fácil de trabalhar com a herança baseada em protótipos que já existia.</p>
        </TopicCard>
    </div>
);

const Lesson5_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Especialização" icon={<InheritanceIcon />}>
            <p><strong>Meta:</strong> Aprender a criar classes que herdam propriedades e métodos de outras classes, usando <code>extends</code> e <code>super</code>. Isto permite-nos criar hierarquias e reutilizar código de forma massiva.</p>
        </TopicCard>
        <TopicCard title="Analogia: A Planta da Mansão" icon={<InheritanceIcon />}>
            <p>Imagina que já tens uma planta para uma "Casa" (a classe base, ou *superclass*). Agora queres construir uma "Mansão" (a classe derivada, ou *subclass*).</p>
            <p>Não vais desenhar a planta toda de novo. Tu pegas na planta da "Casa" e <strong>estendes-a</strong> (<code>extends</code>), adicionando os extras: uma piscina, um cinema, etc. A Mansão <strong>é uma</strong> Casa, mas com mais coisas.</p>
            <p>A palavra-chave <code>super()</code> é como dizer: "constrói primeiro a parte básica da casa, usando a planta original, e só depois é que eu adiciono os meus extras". É obrigatório chamar <code>super()</code> no construtor de uma subclasse antes de usar <code>this</code>.</p>
        </TopicCard>
        <TopicCard title="Prática: Criar uma Classe `Player`" icon={<ExerciseIcon />}>
            <p>Um `Player` é um `Sprite`, mas com uma característica adicional: tem um nome.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`class Sprite {
  constructor(x, y, imagem) {
    this.x = x;
    this.y = y;
    this.imagem = imagem;
  }
  desenhar() {
    console.log(\`A desenhar \${this.imagem} em (\${this.x}, \${this.y})\`);
  }
}

// Player "estende" Sprite
class Player extends Sprite {
  constructor(x, y, imagem, nome) {
    // Chama o construtor da classe "pai" (Sprite) primeiro
    super(x, y, imagem);
    
    // Agora adiciona as propriedades específicas do Player
    this.nome = nome;
    this.pontos = 0;
  }

  // Player pode ter os seus próprios métodos
  marcarPonto() {
    this.pontos++;
    console.log(\`\${this.nome} marcou um ponto! Total: \${this.pontos}\`);
  }
}

const heroi = new Player(0, 100, 'heroi.png', 'Super Coder');
heroi.desenhar();      // Método herdado de Sprite!
heroi.marcarPonto(); // Método próprio de Player!`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Se a classe `Player` também tivesse um método `desenhar()`, qual seria executado quando chamasses `heroi.desenhar()`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> O método da classe `Player`. Quando uma subclasse define um método com o mesmo nome de um método da superclasse, ela "sobrescreve-o" (*overrides*). A busca pela "ferramenta" encontra-a primeiro na "mochila" do `Player` e para por aí, não precisando de ir à "caixa de ferramentas" do `Sprite`.</p>
        </TopicCard>
    </div>
);

const Lesson5_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Segredos e Botões Mágicos" icon={<EncapsulationIcon />}>
            <p><strong>Meta:</strong> Aprender a proteger os dados internos de uma classe (Encapsulamento com <code>#</code>) e a controlar como esses dados são lidos e alterados (Getters e Setters).</p>
        </TopicCard>
        <TopicCard title="Analogia: A Canalização e o Termostato" icon={<EncapsulationIcon />}>
            <p><strong>Encapsulamento (Campos Privados):</strong> As propriedades de uma classe são como a <strong>canalização</strong> de uma casa. Os habitantes não devem mexer nos canos diretamente. Se o fizerem, podem partir alguma coisa. Um campo privado (começado por <code>#</code>) esconde essa canalização. Só a própria classe (o "canalizador") pode mexer nela.</p>
            <p><strong>Getters e Setters (Acesso Controlado):</strong> São como um <strong>termostato inteligente</strong>.</p>
            <ul>
                <li>O <strong>Getter</strong> (`get`) permite-te <strong>ler</strong> a temperatura atual. Pode até formatá-la (ex: "21 graus Celsius").</li>
                <li>O <strong>Setter</strong> (`set`) permite-te <strong>definir</strong> uma nova temperatura, mas pode ter regras! (ex: "Não podes definir a temperatura para 50 graus, é muito alto").</li>
            </ul>
        </TopicCard>
        <TopicCard title="Projeto Final: Framework de Sprites" icon={<ExerciseIcon />}>
            <p>Vamos finalizar a nossa classe `Player`, protegendo a sua velocidade e usando um getter para obter a sua posição de forma formatada.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`class Player {
  // #velocidade é agora um campo privado. Ninguém de fora pode mexer.
  #velocidade = 5; 

  constructor(nome, x, y) {
    this.nome = nome;
    this.x = x;
    this.y = y;
  }

  // Um 'getter' parece uma propriedade, mas é uma função.
  get posicao() {
    return \`(\${this.x}, \${this.y})\`;
  }

  // Um 'setter' para controlar a velocidade máxima.
  set novaVelocidade(valor) {
    if (valor > 0 && valor < 10) {
      this.#velocidade = valor;
    } else {
      console.error("Velocidade inválida!");
    }
  }

  andarParaFrente() {
    this.x += this.#velocidade;
    console.log(\`\${this.nome} andou. Nova posição: \${this.posicao}\`);
  }
}

const heroi = new Player('Super Coder', 0, 0);
heroi.andarParaFrente(); // Anda 5 para a frente

heroi.novaVelocidade = 8; // Usar o setter
heroi.andarParaFrente(); // Agora anda 8 para a frente

console.log(heroi.posicao); // Usar o getter: "(13, 0)"

// heroi.#velocidade = 1000; // Isto daria um erro! O campo é privado.`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Resumo do Módulo" icon={<SummaryIcon />}>
            <p><strong>Uau! Chegaste ao fim de um dos módulos mais densos.</strong> A OOP é um pilar da programação moderna. Agora sabes:</p>
            <ul>
                <li>Criar objetos com <strong>Constructors</strong> e o poder dos <strong>Prototypes</strong>.</li>
                <li>Usar a sintaxe moderna de <strong>Classes</strong> para organizar o teu código.</li>
                <li>Reutilizar código de forma massiva com <strong>Herança</strong> (<code>extends</code>).</li>
                <li>Proteger e controlar o acesso aos dados com <strong>Encapsulamento</strong>, <strong>Getters</strong> e <strong>Setters</strong>.</li>
            </ul>
        </TopicCard>
    </div>
);

const Module5 = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const lessons = [
        { id: 1, title: 'Aula 1: As Plantas', component: <Lesson5_1 /> },
        { id: 2, title: 'Aula 2: O ADN', component: <Lesson5_2 /> },
        { id: 3, title: 'Aula 3: A Sintaxe Moderna', component: <Lesson5_3 /> },
        { id: 4, title: 'Aula 4: A Especialização', component: <Lesson5_4 /> },
        { id: 5, title: 'Aula 5: Os Segredos', component: <Lesson5_5 /> },
    ];
    
    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {/* FIX: Add optional chaining to safely access component property, preventing a crash if 'lesson' is undefined. */}
            {lesson?.component}
        </div>
    );
};

const Lesson7_1 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: O Pedido para Levar" icon={<CallbackIcon />}>
            <p><strong>Meta:</strong> Entender o padrão assíncrono mais antigo do JavaScript, os *callbacks*, e visualizar o problema que eles podem criar, o "Callback Hell".</p>
        </TopicCard>
        <TopicCard title="Analogia: Pedir uma Pizza" icon={<CallbackIcon />}>
            <p>Imagina que vais a uma pizzaria. Em vez de ficares à espera no balcão (o que bloquearia o teu dia), tu fazes o pedido e deixas o teu número de telemóvel. O "número de telemóvel" é a tua <strong>função de callback</strong>.</p>
            <p>Tu vais à tua vida (o resto do teu código continua a executar), e quando a pizza estiver pronta (a operação demorada termina), o empregado "chama-te de volta" (executa a tua função de callback) com a pizza na mão (os dados).</p>
            <p>O problema, o <strong>"Callback Hell"</strong>, acontece quando precisas da pizza para pedir uma sobremesa, e da sobremesa para pedir um café... Acabas com uma cadeia de telefonemas aninhados, um dentro do outro, criando uma estrutura de código confusa e difícil de ler, a "Pirâmide da Desgraça".</p>
        </TopicCard>
        {/* FIX: Corrected invalid JSX syntax by replacing nested double quotes with single quotes for the title prop. */}
        <TopicCard title='Prática: Simular o "Callback Hell"' icon={<ExerciseIcon />}>
            <p>Vamos usar `setTimeout` para simular operações demoradas e ver como o código se aninha.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`console.log("A fazer o pedido da pizza...");

// Simula a espera pela pizza (2 segundos)
setTimeout(() => {
  console.log("A pizza chegou! Agora vou pedir a sobremesa.");
  
  // Simula a espera pela sobremesa (1 segundo)
  setTimeout(() => {
    console.log("A sobremesa chegou! Agora vou pedir o café.");

    // Simula a espera pelo café (0.5 segundos)
    setTimeout(() => {
      console.log("O café chegou! Fim da refeição.");
    }, 500);
    
  }, 1000);

}, 2000);

console.log("Enquanto espero, vou pondo a mesa."); // Isto executa imediatamente!`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> No código acima, qual é a ordem exata em que as mensagens aparecem na consola?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> 1. "A fazer o pedido da pizza...", 2. "Enquanto espero, vou pondo a mesa.", 3. "A pizza chegou!...", 4. "A sobremesa chegou!...", 5. "O café chegou!...". Isto demonstra a natureza não-bloqueante do JavaScript.</p>
        </TopicCard>
    </div>
);

const Lesson7_2 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Encomenda Online" icon={<PromiseIcon />}>
            <p><strong>Meta:</strong> Aprender a usar *Promises*, a solução moderna para o "Callback Hell". Uma *Promise* é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.</p>
        </TopicCard>
        <TopicCard title="Analogia: O Talão da Encomenda" icon={<PromiseIcon />}>
            <p>Fazer uma operação assíncrona com uma *Promise* é como fazer uma <strong>encomenda online</strong>. Assim que pagas, recebes imediatamente um "talão" (a *Promise*). Esse talão tem um estado:</p>
            <ul>
                <li><strong><code>pending</code> (Pendente):</strong> A encomenda está a ser processada.</li>
                <li><strong><code>fulfilled</code> (Realizada):</strong> A encomenda chegou a tua casa com sucesso.</li>
                <li><strong><code>rejected</code> (Rejeitada):</strong> Ocorreu um problema e a encomenda foi cancelada.</li>
            </ul>
            <p>Em vez de aninhar *callbacks*, tu acorrentas ações ao talão:</p>
            <ul>
                <li><strong><code>.then(quandoChegar => ...)</code>:</strong> Define o que fazer quando a encomenda for <strong>realizada</strong>.</li>
                <li><strong><code>.catch(seFalhar => ...)</code>:</strong> Define o que fazer se a encomenda for <strong>rejeitada</strong>.</li>
                <li><strong><code>.finally(() => ...)</code>:</strong> Define uma ação que acontece <strong>sempre</strong> no final, quer a encomenda chegue ou não (ex: arquivar o email de confirmação).</li>
            </ul>
        </TopicCard>
        <TopicCard title="Prática: Refatorar a Pizzaria com Promises" icon={<ExerciseIcon />}>
            <p>Vamos transformar a nossa refeição caótica num processo linear e legível.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`function pedir(item, tempo) {
  console.log(\`A pedir \${item}...\`);
  // A Promise é o nosso "talão"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Para este exemplo, vamos assumir que nunca falha
      console.log(\`\${item} chegou!\`);
      resolve(); // A promessa foi cumprida!
    }, tempo);
  });
}

pedir('pizza', 2000)
  .then(() => pedir('sobremesa', 1000))
  .then(() => pedir('café', 500))
  .then(() => console.log("Fim da refeição."))
  .catch(erro => console.error("Algo correu mal:", erro));`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> No exemplo, o que aconteceria se dentro do `setTimeout` de `pedir('pizza', ...)` chamasses `reject("Não há queijo!")` em vez de `resolve()`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> A cadeia de `.then()` seria imediatamente interrompida e o código saltaria diretamente para o bloco `.catch()`, imprimindo na consola "Algo correu mal: Não há queijo!".</p>
        </TopicCard>
    </div>
);

const Lesson7_3 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Falar com o Mundo" icon={<FetchIcon />}>
            <p><strong>Meta:</strong> Aprender a usar a `fetch API` para fazer pedidos a servidores externos e obter dados reais. Esta é a principal forma de uma aplicação web se tornar dinâmica e obter informação da internet.</p>
        </TopicCard>
        <TopicCard title="Analogia: Pedir um Livro na Biblioteca" icon={<FetchIcon />}>
            <p>Usar `fetch` é como pedir um livro numa biblioteca gigante (um servidor na internet).</p>
            <ol>
                <li><strong>O Pedido:</strong> Tu vais ao balcão e dizes: "Quero o livro que está na prateleira `https://...`" (<code>fetch(url)</code>).</li>
                <li><strong>O Recibo:</strong> O bibliotecário não te dá logo o livro. Ele dá-te um <strong>recibo</strong> (o objeto `Response`). Este recibo confirma que o teu pedido foi recebido e diz se o livro foi encontrado (status 200 OK) ou não (status 404 Not Found).</li>
                <li><strong>A Descodificação:</strong> O livro está escrito numa língua que não entendes (JSON). Tens de pedir ao bibliotecário para o "traduzir" para ti. Esta tradução (<code>response.json()</code>) também demora um pouco e, por isso, também devolve uma *Promise*.</li>
                <li><strong>A Leitura:</strong> Só quando a tradução está pronta é que recebes finalmente o livro (os dados) e podes começar a lê-lo.</li>
            </ol>
        </TopicCard>
        <TopicCard title="Prática: Início da Weather App" icon={<ExerciseIcon />}>
            <p>Vamos usar uma API gratuita de meteorologia para ir buscar o tempo em Lisboa. (Nota: esta API pode não funcionar para sempre, é apenas para demonstração).</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`const url = 'https://goweather.herokuapp.com/weather/Lisbon';

console.log("A pedir dados do tempo...");

fetch(url)
  .then(response => {
    // Primeiro .then() recebe o "recibo"
    console.log("Recibo recebido!", response);
    // Verificamos se o pedido correu bem
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.');
    }
    // Pedimos a "tradução" para JSON
    return response.json(); 
  })
  .then(data => {
    // Segundo .then() recebe os dados "traduzidos"
    console.log("Dados recebidos:", data);
    console.log(\`Temperatura em Lisboa: \${data.temperature}\`);
  })
  .catch(error => {
    console.error("Ocorreu um erro:", error);
  });`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Porque é que precisamos de dois `.then()` na nossa chamada `fetch`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Porque a operação `fetch` tem duas fases assíncronas. A primeira *Promise* resolve com o objeto `Response` (o "recibo") assim que os cabeçalhos da resposta são recebidos. A segunda *Promise*, retornada por `response.json()`, só resolve quando o corpo inteiro da resposta foi descarregado e convertido de JSON para um objeto JavaScript.</p>
        </TopicCard>
    </div>
);

const Lesson7_4 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: A Conversa Fluida" icon={<AsyncAwaitIcon />}>
            <p><strong>Meta:</strong> Aprender a usar a sintaxe `async/await`, que é "açúcar sintático" por cima das *Promises*. Permite-nos escrever código assíncrono que se parece e se lê como código síncrono, tornando-o muito mais intuitivo.</p>
        </TopicCard>
        <TopicCard title="Analogia: Conversar vs. Enviar Cartas" icon={<AsyncAwaitIcon />}>
            <p>Usar `.then()` é como <strong>trocar cartas com alguém</strong>. Tu envias uma carta (`fetch`), e dizes "QUANDO (<code>.then()</code>) receberes a resposta, faz isto...". É uma cadeia de instruções.</p>
            <p>Usar `async/await` é como ter uma <strong>conversa normal ao telemóvel</strong>:</p>
            <ul>
                <li>Tu marcas a conversa como especial (<code>async function</code>).</li>
                <li>Quando precisas de uma resposta, tu simplesmente pausas e <strong>esperas</strong> (<code>await</code>) que a outra pessoa acabe de falar.</li>
                <li>Assim que ela responde, a conversa continua naturalmente na linha seguinte.</li>
            </ul>
            <p>O `try...catch` é o teu "plano B": "<strong>Tenta</strong> (<code>try</code>) ter esta conversa. Se a chamada cair (um erro), <strong>apanha</strong> (<code>catch</code>) o problema e lida com ele."</p>
        </TopicCard>
        <TopicCard title="Prática: Refatorar a Weather App com Async/Await" icon={<ExerciseIcon />}>
            <p>Vamos converter o nosso código `fetch` para a nova sintaxe e adicionar um spinner de loading.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`// Esta função é marcada como 'async'
async function buscarTempo(cidade) {
  // O 'spinner.show()' seria uma função para mostrar um ícone de loading na página
  console.log(\`A buscar tempo para \${cidade}...\`);
  
  const url = \`https://goweather.herokuapp.com/weather/\${cidade}\`;

  try {
    // "Pausa" aqui até o fetch terminar e devolve a resposta
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cidade não encontrada!");
    }

    // "Pausa" aqui até a tradução .json() terminar
    const data = await response.json();

    console.log(\`Temperatura: \${data.temperature}\`);
    // 'displayData(data)' seria uma função para mostrar os dados na página

  } catch (error) {
    console.error("Erro:", error.message);
    // 'displayError(error)' seria uma função para mostrar um erro na página

  } finally {
    // 'spinner.hide()' esconderia o ícone de loading
    console.log("Pedido terminado.");
  }
}

buscarTempo("Porto");`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Quiz Rápido" icon={<QuizIcon />}>
            <p><strong>Pergunta:</strong> Podes usar a palavra-chave `await` fora de uma função marcada com `async`?</p>
            <p className="text-sm text-slate-400"><strong>Resposta:</strong> Não (com uma pequena exceção para o nível mais alto de módulos ES, mas a regra geral é não). A palavra-chave `await` só é válida dentro de funções `async` porque ela precisa de "pausar" a execução dessa função específica, e o JavaScript precisa de saber qual função pausar.</p>
        </TopicCard>
    </div>
);

const Lesson7_5 = () => (
    <div className="space-y-8">
        <TopicCard title="Objetivo: Pedidos em Paralelo" icon={<ParallelIcon />}>
            <p><strong>Meta:</strong> Aprender a lidar com múltiplas *Promises* ao mesmo tempo usando ferramentas como `Promise.all` para otimizar o tempo de carregamento.</p>
        </TopicCard>
        <TopicCard title="Analogia: Pedidos no Restaurante" icon={<ParallelIcon />}>
            <p>Imagina que estás num restaurante com amigos e queres pedir dados de várias cidades ao mesmo tempo.</p>
            <ul>
                <li><strong><code>Promise.all()</code> (O Jantar de Grupo):</strong> Todos pedem os seus pratos ao mesmo tempo. A regra é: só começamos a comer quando <strong>TODOS</strong> os pratos estiverem na mesa. Se o prato de uma pessoa falhar (a cozinha não tem o ingrediente), o jantar inteiro é cancelado (a *Promise* é rejeitada). É ótimo para quando precisas de vários dados que dependem uns dos outros.</li>
                <li><strong><code>Promise.race()</code> (A Competição de Comida):</strong> É uma competição para ver qual prato chega primeiro. Assim que o primeiro prato (a primeira *Promise* a resolver) chega à mesa, a competição acaba e ignoramos os outros. Útil para, por exemplo, fazer um pedido a dois servidores e usar a resposta do mais rápido.</li>
            </ul>
        </TopicCard>
        <TopicCard title="Projeto Final: Weather App com Múltiplas Cidades" icon={<ExerciseIcon />}>
            <p>Vamos melhorar a nossa app para ir buscar o tempo de Lisboa, Porto e Faro, tudo ao mesmo tempo.</p>
            <pre className="bg-slate-950 rounded-md p-4 text-sm ring-1 ring-slate-700">
                <code className="font-mono text-emerald-300 whitespace-pre-wrap">{`async function buscarTempoVariasCidades() {
  const cidades = ['Lisbon', 'Porto', 'Faro'];
  
  // 1. Criar um array de Promises (os "pedidos" ao restaurante)
  const pedidosPromises = cidades.map(cidade =>
    fetch(\`https://goweather.herokuapp.com/weather/\${cidade}\`)
      .then(res => res.json())
  );
  
  console.log("A fazer todos os pedidos ao mesmo tempo...");

  try {
    // 2. Esperar que TODOS os pedidos cheguem
    const resultados = await Promise.all(pedidosPromises);

    // 3. Mostrar os resultados
    resultados.forEach((tempo, index) => {
      console.log(\`Tempo em \${cidades[index]}: \${tempo.temperature}\`);
    });

  } catch (error) {
    console.error("Um dos pedidos falhou!", error);
  }
}

buscarTempoVariasCidades();`}</code>
            </pre>
        </TopicCard>
        <TopicCard title="Resumo do Módulo" icon={<SummaryIcon />}>
            <p><strong>Missão cumprida!</strong> Desvendaste o mistério do código assíncrono. Agora sabes:</p>
            <ul>
                <li>O que são <strong>Callbacks</strong> e como evitar o "Callback Hell".</li>
                <li>A estrutura de <strong>Promises</strong> (<code>.then</code>, <code>.catch</code>) para um código mais limpo.</li>
                <li>Usar <strong><code>fetch</code></strong> para comunicar com APIs e obter dados do mundo real.</li>
                <li>Escrever código assíncrono legível e moderno com <strong><code>async/await</code></strong>.</li>
                <li>Otimizar múltiplos pedidos com <strong><code>Promise.all</code></strong>.</li>
            </ul>
        </TopicCard>
    </div>
);


const Module7 = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const lessons = [
        { id: 1, title: 'Aula 1: O Pedido', component: <Lesson7_1 /> },
        { id: 2, title: 'Aula 2: A Encomenda', component: <Lesson7_2 /> },
        { id: 3, title: 'Aula 3: Falar com o Mundo', component: <Lesson7_3 /> },
        { id: 4, title: 'Aula 4: A Conversa', component: <Lesson7_4 /> },
        { id: 5, title: 'Aula 5: O Paralelo', component: <Lesson7_5 /> },
    ];
    
    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-slate-700 pb-4">
                {lessons.map(l => (
                     <button 
                        key={l.id} 
                        onClick={() => setActiveLesson(l.id)}
                        aria-pressed={activeLesson === l.id}
                        className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                            activeLesson === l.id
                                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                                : 'text-slate-300 bg-slate-800 hover:bg-slate-700'
                        }`}
                     >
                        {l.title}
                     </button>
                ))}
            </div>
            {lesson.component}
        </div>
    );
};


const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { 
      id: 0, 
      title: "Módulo 0: Preparação do Ambiente",
      description: "Bem-vindo! Este primeiro módulo é crucial para garantir que tens todas as ferramentas necessárias e configuradas corretamente.",
      component: <Module0 />
    },
    { 
      id: 1, 
      title: "Módulo 1: Fundamentos Absolutos",
      description: "Aqui vamos construir a base sólida do teu conhecimento. Ao final, terás construído uma calculadora de IMC interativa. Projeto: Calculadora de IMC.",
      component: <Module1 />
    },
    {
      id: 2,
      title: "Módulo 2: Controlo de Fluxo",
      description: "Aqui vais aprender a dar inteligência ao teu código, permitindo-lhe tomar decisões e repetir tarefas. Projeto: Jogo 'Adivinha o Número'.",
      component: <Module2 />
    },
    {
      id: 3,
      title: "Módulo 3: Funções & Scope",
      description: "Aprende a organizar e reutilizar o teu código. Funções são as 'receitas' que tornam as tuas aplicações poderosas e modulares. Projeto: Simulador de Caixa Multibanco.",
      component: <Module3 />
    },
    {
      id: 4,
      title: "Módulo 4: Estruturas de Dados",
      description: "Aprende a organizar coleções de dados com Arrays e Objetos e a manipulá-los com os poderosos métodos de iteração. Projeto: Carrinho de Compras.",
      component: <Module4 />
    },
    {
      id: 5,
      title: "Módulo 5: Programação Orientada a Objetos",
      description: "Deixa de ser artesão, sê engenheiro. Aprende a criar 'plantas' para os teus dados com Classes, Herança e Encapsulamento. Projeto: Mini-framework de sprites para jogo 2D.",
      component: <Module5 />
    },
    {
        id: 7,
        title: "Módulo 7: Assíncrono",
        description: "Aprende a gerir tarefas que demoram tempo, como pedidos a servidores, sem bloquear a tua aplicação, usando Promises e Async/Await. Projeto: Weather App.",
        component: <Module7 />
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule);
  if (!currentModule) return null;

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 mb-2">
            Curso de JavaScript
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
            {currentModule.title}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {currentModule.description}
          </p>
        </header>

        <div className="flex justify-center border-b border-slate-700 mb-12 overflow-x-auto">
          <div className="flex">
            {modules.map(module => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                aria-pressed={activeModule === module.id}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 font-semibold text-sm rounded-t-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-cyan-400 ${
                  activeModule === module.id
                    ? 'border-b-2 border-cyan-400 text-cyan-400 bg-slate-800/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/20'
                }`}
              >
                {`Módulo ${module.id}`}
              </button>
            ))}
          </div>
        </div>

        {currentModule.component}

        <footer className="text-center mt-16 text-slate-500 text-sm">
          <p>Boa sorte com o curso! A prática consistente é a chave para o sucesso.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;