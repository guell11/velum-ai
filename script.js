const body = document.body;

const translations = {
  'pt-BR': {
    title: 'VELUM — Local. Rápido. Code-first.',
    meta_description: 'VELUM — modelo local 8B / ~1B ativo, pós-treinado para código.',
    aria_home: 'VELUM início', aria_menu: 'Abrir menu', aria_scroll: 'Rolar para o conteúdo', aria_video_play: 'Reproduzir vídeo', aria_video_pause: 'Pausar vídeo',
    nav_model: 'MODELO', nav_arch: 'ARQUITETURA', nav_projects: 'PROJETOS', nav_roadmap: 'ROADMAP', nav_cta: 'VER O QUE ELE CRIA',
    hero_eyebrow: '<span class="pulse"></span> LOCAL-FIRST · ESPECIALISTA EM CÓDIGO',
    hero_desc: 'Um modelo pós-treinado para uma coisa: <strong>código.</strong><br>Executa localmente. Pensa em software. Constrói coisas que rodam.',
    hero_explore: 'EXPLORAR O MODELO <span>↗</span>', hero_projects: 'VER PROJETOS GERADOS <span>↓</span>', hero_side_left: 'PÓS-TREINADO PARA CÓDIGO', hero_side_right: 'RIO DE JANEIRO · BRASIL',
    metric_base_label: 'BASE', metric_focus_label: 'FOCO', metric_exec_label: 'EXECUÇÃO', metric_focus_value: '100% CODE', metric_exec_value: 'LOCAL',
    sec_model: '01 / MODELO', intro_eyebrow: 'BUILT, NOT ANSWERED.', intro_title: 'Menos chatbot.<br><em>Mais ferramenta.</em>',
    intro_p1: 'VELUM parte de um modelo base da <strong>Liquid AI</strong> com 8 bilhões de parâmetros totais e aproximadamente 1 bilhão ativo durante a inferência.',
    intro_p2: 'O trabalho do VELUM está no <strong>fine-tuning e post-training especializado em código</strong>: geração de projetos, debugging, refatoração, raciocínio sobre software e criação de experiências executáveis.',
    intro_quote: '“Quanto você consegue extrair de um modelo compacto quando para de pedir para ele fazer tudo e ensina ele a fazer uma coisa muito bem?”',
    stat_total_label: 'PARÂMETROS TOTAIS', stat_total_small: 'capacidade disponível', stat_active_label: 'ATIVOS', stat_active_small: 'por inferência', stat_spec_label: 'ESPECIALIZAÇÃO', stat_spec_small: 'post-training dedicado', stat_phil_label: 'FILOSOFIA', stat_phil_small: 'na sua máquina',
    sec_arch: '02 / ARQUITETURA', arch_eyebrow: '8B DISPONÍVEIS. ~1B TRABALHANDO.', arch_title: 'Capacidade sem<br>força bruta.', arch_p: 'A base eficiente permite separar capacidade total de custo ativo. O VELUM preserva essa característica e direciona sua especialização para desenvolvimento de software.',
    feat1_title: 'Local-first', feat1_p: 'Projetado para viver perto do editor, do terminal e do seu código.', feat2_title: 'Code-focused', feat2_p: 'Comportamento pós-treinado para entender e construir software.', feat3_title: 'Eficiente', feat3_p: 'Menos compute ativo sem transformar capacidade em enfeite de marketing.',
    sec_demos: '03 / DEMOS', demo1_p: 'Prompt → código → mundos jogáveis.', demo2_p: 'Local. Rápido. Eficiente. Esperto.',
    sec_projects: '04 / PROJETOS GERADOS', projects_eyebrow: 'FROM PROMPT TO RUNNING CODE.', projects_title: 'Não mostre só<br>benchmarks.', projects_p: 'Mostre o que o modelo consegue construir. Estes experimentos testam geração de interface, lógica, interação e cenas executáveis no navegador.',
    proj1_type: '01 / JOGO DE NAVEGADOR', proj1_p: 'Game loop, obstáculos, colisão, score, animações e interface.', proj2_type: '02 / THREE.JS', proj2_p: 'Cena 3D, voxels, câmera orbital, interação e partículas.', proj3_type: '03 / GAMEPLAY', proj3_p: 'Corrida 3D com câmera de perseguição, pista, trem e collectibles.',
    alt_flappy: 'Flappy Bird gerado pelo VELUM', alt_bonsai: 'Bonsai Voxel 3D gerado pelo VELUM', alt_railway: 'Railway Rush gerado pelo VELUM',
    sec_code: '05 / CODE-FIRST', code_eyebrow: 'IDEIA ENTRA. SOFTWARE SAI.', code_title: 'O resultado não precisa ser outro parágrafo.', code_p: 'O objetivo do post-training é fazer o modelo operar como ferramenta de desenvolvimento: entender intenção, estruturar solução, gerar código, corrigir erros e iterar.',
    cap1_label: 'GERAÇÃO', cap1_value: 'projetos completos', cap2_label: 'DEBUG', cap2_value: 'análise + correção', cap3_label: 'REFATORAÇÃO', cap3_value: 'estrutura + clareza', cap4_label: 'PROTOTIPAGEM', cap4_value: 'ideia → executável',
    sec_roadmap: '06 / ROADMAP', road_eyebrow: 'EXPERIMENTAL. MENSURÁVEL. ABERTO A ITERAÇÃO.', road_title: 'O que vem agora.', road1_p: 'Expandir e refinar dados especializados em código.', road1_status: 'EM DESENVOLVIMENTO', road2_p: 'HumanEval, MBPP, throughput, TTFT e memória real.', road2_status: 'PRÓXIMO', road3_p: 'Explorar Q8, Q6, Q5 e Q4 para hardware local.', road3_status: 'PLANEJADO', road4_p: 'Checkpoint, documentação e integração local.', road4_status: 'PLANEJADO', road_note: 'Sem números mágicos antes de medir. A internet já possui benchmark inventado suficiente para várias gerações.',
    final_eyebrow: 'VELUM / BRASIL', final_title: 'Inteligência<br>que fica perto.', final_p: 'Local. Especializada. Feita para quem constrói.', back_top: 'VOLTAR AO TOPO <span>↑</span>', footer_place: 'RIO DE JANEIRO · BRASIL',
    terminal: '<span class="muted">$</span> velum run\n\n<span class="blue">model</span>: VELUM-8B\n<span class="blue">mode</span>: local\n<span class="blue">focus</span>: code\n\n<span class="muted">&gt;</span> crie um jogo 3D com uma pista,\n  moedas e um trem ao lado da estrada\n\n<span class="green">✓ planejando arquitetura</span>\n<span class="green">✓ gerando game loop</span>\n<span class="green">✓ construindo cena</span>\n<span class="green">✓ conectando controles</span>\n<span class="green">✓ saída executável</span>\n\n<span class="accent">BUILD COMPLETE.</span>'
  },
  'en': {
    title: 'VELUM — Local. Fast. Code-first.',
    meta_description: 'VELUM — local 8B / ~1B active model, post-trained for code.',
    aria_home: 'VELUM home', aria_menu: 'Open menu', aria_scroll: 'Scroll to content', aria_video_play: 'Play video', aria_video_pause: 'Pause video',
    nav_model: 'MODEL', nav_arch: 'ARCHITECTURE', nav_projects: 'PROJECTS', nav_roadmap: 'ROADMAP', nav_cta: 'SEE WHAT IT BUILDS',
    hero_eyebrow: '<span class="pulse"></span> LOCAL-FIRST · CODE SPECIALIST',
    hero_desc: 'A model post-trained for one thing: <strong>code.</strong><br>Runs locally. Thinks in software. Builds things that run.',
    hero_explore: 'EXPLORE THE MODEL <span>↗</span>', hero_projects: 'SEE GENERATED PROJECTS <span>↓</span>', hero_side_left: 'POST-TRAINED FOR CODE', hero_side_right: 'RIO DE JANEIRO · BRAZIL',
    metric_base_label: 'BASE', metric_focus_label: 'FOCUS', metric_exec_label: 'RUNTIME', metric_focus_value: '100% CODE', metric_exec_value: 'LOCAL',
    sec_model: '01 / MODEL', intro_eyebrow: 'BUILT, NOT ANSWERED.', intro_title: 'Less chatbot.<br><em>More tool.</em>',
    intro_p1: 'VELUM starts from a <strong>Liquid AI</strong> base model with 8 billion total parameters and approximately 1 billion active during inference.',
    intro_p2: 'VELUM\'s work is in <strong>code-specialized fine-tuning and post-training</strong>: project generation, debugging, refactoring, software reasoning and the creation of executable experiences.',
    intro_quote: '“How much can you extract from a compact model when you stop asking it to do everything and teach it to do one thing extremely well?”',
    stat_total_label: 'TOTAL PARAMETERS', stat_total_small: 'available capacity', stat_active_label: 'ACTIVE', stat_active_small: 'per inference', stat_spec_label: 'SPECIALIZATION', stat_spec_small: 'dedicated post-training', stat_phil_label: 'PHILOSOPHY', stat_phil_small: 'on your machine',
    sec_arch: '02 / ARCHITECTURE', arch_eyebrow: '8B AVAILABLE. ~1B WORKING.', arch_title: 'Capacity without<br>brute force.', arch_p: 'The efficient base separates total capacity from active compute cost. VELUM preserves that property and directs its specialization toward software development.',
    feat1_title: 'Local-first', feat1_p: 'Designed to live close to your editor, terminal and code.', feat2_title: 'Code-focused', feat2_p: 'Post-trained behavior for understanding and building software.', feat3_title: 'Efficient', feat3_p: 'Less active compute without turning capacity into a marketing ornament.',
    sec_demos: '03 / DEMOS', demo1_p: 'Prompt → code → playable worlds.', demo2_p: 'Local. Fast. Efficient. Smart.',
    sec_projects: '04 / GENERATED PROJECTS', projects_eyebrow: 'FROM PROMPT TO RUNNING CODE.', projects_title: 'Don’t show only<br>benchmarks.', projects_p: 'Show what the model can build. These experiments test interface generation, logic, interaction and executable browser scenes.',
    proj1_type: '01 / BROWSER GAME', proj1_p: 'Game loop, obstacles, collision, score, animations and interface.', proj2_type: '02 / THREE.JS', proj2_p: '3D scene, voxels, orbit camera, interaction and particles.', proj3_type: '03 / GAMEPLAY', proj3_p: '3D racing with chase camera, track, train and collectibles.',
    alt_flappy: 'Flappy Bird generated by VELUM', alt_bonsai: 'Bonsai Voxel 3D generated by VELUM', alt_railway: 'Railway Rush generated by VELUM',
    sec_code: '05 / CODE-FIRST', code_eyebrow: 'IDEA IN. SOFTWARE OUT.', code_title: 'The result does not have to be another paragraph.', code_p: 'The goal of post-training is to make the model operate as a development tool: understand intent, structure solutions, generate code, fix errors and iterate.',
    cap1_label: 'GENERATION', cap1_value: 'complete projects', cap2_label: 'DEBUG', cap2_value: 'analysis + fixes', cap3_label: 'REFACTORING', cap3_value: 'structure + clarity', cap4_label: 'PROTOTYPING', cap4_value: 'idea → executable',
    sec_roadmap: '06 / ROADMAP', road_eyebrow: 'EXPERIMENTAL. MEASURABLE. OPEN TO ITERATION.', road_title: 'What comes next.', road1_p: 'Expand and refine code-specialized training data.', road1_status: 'IN DEVELOPMENT', road2_p: 'HumanEval, MBPP, throughput, TTFT and real memory usage.', road2_status: 'NEXT', road3_p: 'Explore Q8, Q6, Q5 and Q4 for local hardware.', road3_status: 'PLANNED', road4_p: 'Checkpoint, documentation and local integration.', road4_status: 'PLANNED', road_note: 'No magic numbers before measurement. The internet already has enough invented benchmarks for several generations.',
    final_eyebrow: 'VELUM / BRAZIL', final_title: 'Intelligence<br>that stays close.', final_p: 'Local. Specialized. Made for builders.', back_top: 'BACK TO TOP <span>↑</span>', footer_place: 'RIO DE JANEIRO · BRAZIL',
    terminal: '<span class="muted">$</span> velum run\n\n<span class="blue">model</span>: VELUM-8B\n<span class="blue">mode</span>: local\n<span class="blue">focus</span>: code\n\n<span class="muted">&gt;</span> build a 3D racing game with a track,\n  coins and a train beside the road\n\n<span class="green">✓ planning architecture</span>\n<span class="green">✓ generating game loop</span>\n<span class="green">✓ building scene</span>\n<span class="green">✓ wiring controls</span>\n<span class="green">✓ runnable output</span>\n\n<span class="accent">BUILD COMPLETE.</span>'
  },
  'zh-CN': {
    title: 'VELUM — 本地 · 快速 · 代码优先',
    meta_description: 'VELUM — 8B 总参数、约 1B 激活参数的本地代码专用后训练模型。',
    aria_home: 'VELUM 首页', aria_menu: '打开菜单', aria_scroll: '滚动到内容', aria_video_play: '播放视频', aria_video_pause: '暂停视频',
    nav_model: '模型', nav_arch: '架构', nav_projects: '项目', nav_roadmap: '路线图', nav_cta: '看看它能构建什么',
    hero_eyebrow: '<span class="pulse"></span> 本地优先 · 代码专家',
    hero_desc: '一个只为一件事进行后训练的模型：<strong>代码。</strong><br>本地运行。以软件为思维对象。构建真正能运行的东西。',
    hero_explore: '探索模型 <span>↗</span>', hero_projects: '查看生成项目 <span>↓</span>', hero_side_left: '专为代码后训练', hero_side_right: '巴西 · 里约热内卢',
    metric_base_label: '基础模型', metric_focus_label: '专注', metric_exec_label: '运行', metric_focus_value: '100% 代码', metric_exec_value: '本地',
    sec_model: '01 / 模型', intro_eyebrow: '不是回答，而是构建。', intro_title: '少一点聊天机器人。<br><em>多一点工具。</em>',
    intro_p1: 'VELUM 基于 <strong>Liquid AI</strong> 的基础模型，总参数约 80 亿，推理时约有 10 亿参数处于激活状态。',
    intro_p2: 'VELUM 的核心工作是<strong>面向代码的微调与后训练</strong>：项目生成、调试、重构、软件推理，以及构建可执行体验。',
    intro_quote: '“当你不再要求一个紧凑模型什么都做，而是教它把一件事做到极致，它究竟能发挥出多少能力？”',
    stat_total_label: '总参数', stat_total_small: '可用容量', stat_active_label: '激活参数', stat_active_small: '每次推理', stat_spec_label: '专业方向', stat_spec_small: '专用后训练', stat_phil_label: '理念', stat_phil_small: '运行在你的机器上',
    sec_arch: '02 / 架构', arch_eyebrow: '8B 可用。~1B 工作。', arch_title: '不靠蛮力的<br>模型容量。', arch_p: '高效基础模型将总容量与实际计算成本分离。VELUM 保留这一特性，并将专业能力集中到软件开发。',
    feat1_title: '本地优先', feat1_p: '设计目标就是靠近你的编辑器、终端与代码。', feat2_title: '代码导向', feat2_p: '通过后训练强化理解与构建软件的行为。', feat3_title: '高效', feat3_p: '减少激活计算，而不是把参数量变成营销装饰。',
    sec_demos: '03 / 演示', demo1_p: '提示词 → 代码 → 可玩的世界。', demo2_p: '本地。快速。高效。聪明。',
    sec_projects: '04 / 生成项目', projects_eyebrow: '从提示词到可运行代码。', projects_title: '别只展示<br>Benchmark。', projects_p: '展示模型真正能构建什么。这些实验测试界面生成、逻辑、交互以及浏览器中的可执行场景。',
    proj1_type: '01 / 浏览器游戏', proj1_p: '游戏循环、障碍物、碰撞、分数、动画与界面。', proj2_type: '02 / THREE.JS', proj2_p: '3D 场景、体素、轨道相机、交互与粒子。', proj3_type: '03 / 游戏玩法', proj3_p: '3D 赛车、追踪相机、赛道、火车与收集物。',
    alt_flappy: 'VELUM 生成的 Flappy Bird', alt_bonsai: 'VELUM 生成的 3D 体素盆栽', alt_railway: 'VELUM 生成的 Railway Rush',
    sec_code: '05 / 代码优先', code_eyebrow: '输入想法。输出软件。', code_title: '结果不一定只是另一段文字。', code_p: '后训练的目标，是让模型像开发工具一样工作：理解意图、组织方案、生成代码、修复错误并持续迭代。',
    cap1_label: '生成', cap1_value: '完整项目', cap2_label: '调试', cap2_value: '分析 + 修复', cap3_label: '重构', cap3_value: '结构 + 清晰度', cap4_label: '原型开发', cap4_value: '想法 → 可执行',
    sec_roadmap: '06 / 路线图', road_eyebrow: '实验性。可测量。持续迭代。', road_title: '接下来做什么。', road1_p: '扩展并优化代码专业化训练数据。', road1_status: '开发中', road2_p: 'HumanEval、MBPP、吞吐量、TTFT 与真实内存占用。', road2_status: '下一步', road3_p: '针对本地硬件探索 Q8、Q6、Q5 与 Q4。', road3_status: '计划中', road4_p: '发布 checkpoint、文档与本地集成。', road4_status: '计划中', road_note: '测量之前不写魔法数字。互联网上虚构的 benchmark 已经够几代人用了。',
    final_eyebrow: 'VELUM / 巴西', final_title: '让智能<br>离你更近。', final_p: '本地。专注。为构建者而生。', back_top: '返回顶部 <span>↑</span>', footer_place: '巴西 · 里约热内卢',
    terminal: '<span class="muted">$</span> velum run\n\n<span class="blue">model</span>: VELUM-8B\n<span class="blue">mode</span>: local\n<span class="blue">focus</span>: code\n\n<span class="muted">&gt;</span> 创建一个 3D 赛车游戏，包含赛道、\n  金币以及道路旁行驶的火车\n\n<span class="green">✓ 规划架构</span>\n<span class="green">✓ 生成游戏循环</span>\n<span class="green">✓ 构建场景</span>\n<span class="green">✓ 连接控制逻辑</span>\n<span class="green">✓ 生成可执行结果</span>\n\n<span class="accent">BUILD COMPLETE.</span>'
  },
  'it': {
    title: 'VELUM — Locale. Veloce. Code-first.',
    meta_description: 'VELUM — modello locale 8B / ~1B attivo, post-addestrato per il codice.',
    aria_home: 'Home VELUM', aria_menu: 'Apri menu', aria_scroll: 'Scorri al contenuto', aria_video_play: 'Riproduci video', aria_video_pause: 'Metti in pausa il video',
    nav_model: 'MODELLO', nav_arch: 'ARCHITETTURA', nav_projects: 'PROGETTI', nav_roadmap: 'ROADMAP', nav_cta: 'VEDI COSA COSTRUISCE',
    hero_eyebrow: '<span class="pulse"></span> LOCAL-FIRST · SPECIALISTA DEL CODICE',
    hero_desc: 'Un modello post-addestrato per una cosa: <strong>codice.</strong><br>Funziona in locale. Ragiona sul software. Costruisce cose che funzionano.',
    hero_explore: 'ESPLORA IL MODELLO <span>↗</span>', hero_projects: 'VEDI I PROGETTI GENERATI <span>↓</span>', hero_side_left: 'POST-TRAINED FOR CODE', hero_side_right: 'RIO DE JANEIRO · BRASILE',
    metric_base_label: 'BASE', metric_focus_label: 'FOCUS', metric_exec_label: 'ESECUZIONE', metric_focus_value: '100% CODE', metric_exec_value: 'LOCALE',
    sec_model: '01 / MODELLO', intro_eyebrow: 'BUILT, NOT ANSWERED.', intro_title: 'Meno chatbot.<br><em>Più strumento.</em>',
    intro_p1: 'VELUM parte da un modello base di <strong>Liquid AI</strong> con 8 miliardi di parametri totali e circa 1 miliardo attivo durante l’inferenza.',
    intro_p2: 'Il lavoro di VELUM è nel <strong>fine-tuning e post-training specializzato nel codice</strong>: generazione di progetti, debugging, refactoring, ragionamento sul software e creazione di esperienze eseguibili.',
    intro_quote: '“Quanto puoi ottenere da un modello compatto quando smetti di chiedergli di fare tutto e gli insegni a fare una cosa davvero bene?”',
    stat_total_label: 'PARAMETRI TOTALI', stat_total_small: 'capacità disponibile', stat_active_label: 'ATTIVI', stat_active_small: 'per inferenza', stat_spec_label: 'SPECIALIZZAZIONE', stat_spec_small: 'post-training dedicato', stat_phil_label: 'FILOSOFIA', stat_phil_small: 'sulla tua macchina',
    sec_arch: '02 / ARCHITETTURA', arch_eyebrow: '8B DISPONIBILI. ~1B AL LAVORO.', arch_title: 'Capacità senza<br>forza bruta.', arch_p: 'La base efficiente separa la capacità totale dal costo di calcolo attivo. VELUM conserva questa proprietà e orienta la specializzazione verso lo sviluppo software.',
    feat1_title: 'Local-first', feat1_p: 'Progettato per vivere vicino al tuo editor, terminale e codice.', feat2_title: 'Code-focused', feat2_p: 'Comportamento post-addestrato per comprendere e costruire software.', feat3_title: 'Efficiente', feat3_p: 'Meno calcolo attivo, senza trasformare la capacità in decorazione da marketing.',
    sec_demos: '03 / DEMO', demo1_p: 'Prompt → codice → mondi giocabili.', demo2_p: 'Locale. Veloce. Efficiente. Intelligente.',
    sec_projects: '04 / PROGETTI GENERATI', projects_eyebrow: 'DAL PROMPT AL CODICE ESEGUIBILE.', projects_title: 'Non mostrare solo<br>benchmark.', projects_p: 'Mostra cosa sa costruire il modello. Questi esperimenti testano generazione di interfacce, logica, interazione e scene eseguibili nel browser.',
    proj1_type: '01 / GIOCO BROWSER', proj1_p: 'Game loop, ostacoli, collisioni, punteggio, animazioni e interfaccia.', proj2_type: '02 / THREE.JS', proj2_p: 'Scena 3D, voxel, camera orbitale, interazione e particelle.', proj3_type: '03 / GAMEPLAY', proj3_p: 'Corsa 3D con camera d’inseguimento, pista, treno e collezionabili.',
    alt_flappy: 'Flappy Bird generato da VELUM', alt_bonsai: 'Bonsai Voxel 3D generato da VELUM', alt_railway: 'Railway Rush generato da VELUM',
    sec_code: '05 / CODE-FIRST', code_eyebrow: 'IDEA IN. SOFTWARE OUT.', code_title: 'Il risultato non deve essere un altro paragrafo.', code_p: 'L’obiettivo del post-training è far operare il modello come strumento di sviluppo: comprendere l’intento, strutturare la soluzione, generare codice, correggere errori e iterare.',
    cap1_label: 'GENERAZIONE', cap1_value: 'progetti completi', cap2_label: 'DEBUG', cap2_value: 'analisi + correzione', cap3_label: 'REFACTORING', cap3_value: 'struttura + chiarezza', cap4_label: 'PROTOTIPAZIONE', cap4_value: 'idea → eseguibile',
    sec_roadmap: '06 / ROADMAP', road_eyebrow: 'SPERIMENTALE. MISURABILE. APERTO ALL’ITERAZIONE.', road_title: 'Cosa viene dopo.', road1_p: 'Espandere e perfezionare i dati specializzati nel codice.', road1_status: 'IN SVILUPPO', road2_p: 'HumanEval, MBPP, throughput, TTFT e memoria reale.', road2_status: 'PROSSIMO', road3_p: 'Esplorare Q8, Q6, Q5 e Q4 per hardware locale.', road3_status: 'PIANIFICATO', road4_p: 'Checkpoint, documentazione e integrazione locale.', road4_status: 'PIANIFICATO', road_note: 'Niente numeri magici prima delle misurazioni. Internet ha già abbastanza benchmark inventati per diverse generazioni.',
    final_eyebrow: 'VELUM / BRASILE', final_title: 'Intelligenza<br>che resta vicina.', final_p: 'Locale. Specializzata. Creata per chi costruisce.', back_top: 'TORNA SU <span>↑</span>', footer_place: 'RIO DE JANEIRO · BRASILE',
    terminal: '<span class="muted">$</span> velum run\n\n<span class="blue">model</span>: VELUM-8B\n<span class="blue">mode</span>: local\n<span class="blue">focus</span>: code\n\n<span class="muted">&gt;</span> crea un gioco di corse 3D con una pista,\n  monete e un treno accanto alla strada\n\n<span class="green">✓ pianificazione architettura</span>\n<span class="green">✓ generazione game loop</span>\n<span class="green">✓ costruzione scena</span>\n<span class="green">✓ collegamento controlli</span>\n<span class="green">✓ output eseguibile</span>\n\n<span class="accent">BUILD COMPLETE.</span>'
  },
  'es': {
    title: 'VELUM — Local. Rápido. Code-first.',
    meta_description: 'VELUM — modelo local 8B / ~1B activo, post-entrenado para código.',
    aria_home: 'Inicio de VELUM', aria_menu: 'Abrir menú', aria_scroll: 'Desplazarse al contenido', aria_video_play: 'Reproducir vídeo', aria_video_pause: 'Pausar vídeo',
    nav_model: 'MODELO', nav_arch: 'ARQUITECTURA', nav_projects: 'PROYECTOS', nav_roadmap: 'ROADMAP', nav_cta: 'VER LO QUE CONSTRUYE',
    hero_eyebrow: '<span class="pulse"></span> LOCAL-FIRST · ESPECIALISTA EN CÓDIGO',
    hero_desc: 'Un modelo post-entrenado para una sola cosa: <strong>código.</strong><br>Se ejecuta localmente. Piensa en software. Construye cosas que funcionan.',
    hero_explore: 'EXPLORAR EL MODELO <span>↗</span>', hero_projects: 'VER PROYECTOS GENERADOS <span>↓</span>', hero_side_left: 'POST-ENTRENADO PARA CÓDIGO', hero_side_right: 'RÍO DE JANEIRO · BRASIL',
    metric_base_label: 'BASE', metric_focus_label: 'ENFOQUE', metric_exec_label: 'EJECUCIÓN', metric_focus_value: '100% CODE', metric_exec_value: 'LOCAL',
    sec_model: '01 / MODELO', intro_eyebrow: 'BUILT, NOT ANSWERED.', intro_title: 'Menos chatbot.<br><em>Más herramienta.</em>',
    intro_p1: 'VELUM parte de un modelo base de <strong>Liquid AI</strong> con 8 mil millones de parámetros totales y aproximadamente mil millones activos durante la inferencia.',
    intro_p2: 'El trabajo de VELUM está en el <strong>fine-tuning y post-training especializado en código</strong>: generación de proyectos, debugging, refactorización, razonamiento sobre software y creación de experiencias ejecutables.',
    intro_quote: '“¿Cuánto puedes extraer de un modelo compacto cuando dejas de pedirle que haga de todo y le enseñas a hacer una cosa realmente bien?”',
    stat_total_label: 'PARÁMETROS TOTALES', stat_total_small: 'capacidad disponible', stat_active_label: 'ACTIVOS', stat_active_small: 'por inferencia', stat_spec_label: 'ESPECIALIZACIÓN', stat_spec_small: 'post-training dedicado', stat_phil_label: 'FILOSOFÍA', stat_phil_small: 'en tu máquina',
    sec_arch: '02 / ARQUITECTURA', arch_eyebrow: '8B DISPONIBLES. ~1B TRABAJANDO.', arch_title: 'Capacidad sin<br>fuerza bruta.', arch_p: 'La base eficiente permite separar la capacidad total del coste de cómputo activo. VELUM conserva esta característica y orienta su especialización al desarrollo de software.',
    feat1_title: 'Local-first', feat1_p: 'Diseñado para vivir cerca de tu editor, terminal y código.', feat2_title: 'Code-focused', feat2_p: 'Comportamiento post-entrenado para entender y construir software.', feat3_title: 'Eficiente', feat3_p: 'Menos cómputo activo sin convertir la capacidad en decoración de marketing.',
    sec_demos: '03 / DEMOS', demo1_p: 'Prompt → código → mundos jugables.', demo2_p: 'Local. Rápido. Eficiente. Inteligente.',
    sec_projects: '04 / PROYECTOS GENERADOS', projects_eyebrow: 'DEL PROMPT AL CÓDIGO EJECUTABLE.', projects_title: 'No muestres solo<br>benchmarks.', projects_p: 'Muestra lo que el modelo puede construir. Estos experimentos prueban generación de interfaces, lógica, interacción y escenas ejecutables en el navegador.',
    proj1_type: '01 / JUEGO DE NAVEGADOR', proj1_p: 'Game loop, obstáculos, colisiones, puntuación, animaciones e interfaz.', proj2_type: '02 / THREE.JS', proj2_p: 'Escena 3D, voxels, cámara orbital, interacción y partículas.', proj3_type: '03 / GAMEPLAY', proj3_p: 'Carrera 3D con cámara de persecución, pista, tren y coleccionables.',
    alt_flappy: 'Flappy Bird generado por VELUM', alt_bonsai: 'Bonsai Voxel 3D generado por VELUM', alt_railway: 'Railway Rush generado por VELUM',
    sec_code: '05 / CODE-FIRST', code_eyebrow: 'IDEA IN. SOFTWARE OUT.', code_title: 'El resultado no tiene que ser otro párrafo.', code_p: 'El objetivo del post-training es hacer que el modelo opere como una herramienta de desarrollo: entender intención, estructurar soluciones, generar código, corregir errores e iterar.',
    cap1_label: 'GENERACIÓN', cap1_value: 'proyectos completos', cap2_label: 'DEBUG', cap2_value: 'análisis + corrección', cap3_label: 'REFACTORIZACIÓN', cap3_value: 'estructura + claridad', cap4_label: 'PROTOTIPADO', cap4_value: 'idea → ejecutable',
    sec_roadmap: '06 / ROADMAP', road_eyebrow: 'EXPERIMENTAL. MEDIBLE. ABIERTO A ITERAR.', road_title: 'Lo que viene ahora.', road1_p: 'Expandir y refinar datos especializados en código.', road1_status: 'EN DESARROLLO', road2_p: 'HumanEval, MBPP, throughput, TTFT y memoria real.', road2_status: 'PRÓXIMO', road3_p: 'Explorar Q8, Q6, Q5 y Q4 para hardware local.', road3_status: 'PLANIFICADO', road4_p: 'Checkpoint, documentación e integración local.', road4_status: 'PLANIFICADO', road_note: 'Sin números mágicos antes de medir. Internet ya tiene suficientes benchmarks inventados para varias generaciones.',
    final_eyebrow: 'VELUM / BRASIL', final_title: 'Inteligencia<br>que se queda cerca.', final_p: 'Local. Especializada. Hecha para quienes construyen.', back_top: 'VOLVER ARRIBA <span>↑</span>', footer_place: 'RÍO DE JANEIRO · BRASIL',
    terminal: '<span class="muted">$</span> velum run\n\n<span class="blue">model</span>: VELUM-8B\n<span class="blue">mode</span>: local\n<span class="blue">focus</span>: code\n\n<span class="muted">&gt;</span> crea un juego de carreras 3D con pista,\n  monedas y un tren junto a la carretera\n\n<span class="green">✓ planificando arquitectura</span>\n<span class="green">✓ generando game loop</span>\n<span class="green">✓ construyendo escena</span>\n<span class="green">✓ conectando controles</span>\n<span class="green">✓ salida ejecutable</span>\n\n<span class="accent">BUILD COMPLETE.</span>'
  }
};

const languageSelect = document.getElementById('language-select');
let currentLanguage = 'pt-BR';

function chooseInitialLanguage() {
  const saved = localStorage.getItem('velum-language');
  if (saved && translations[saved]) return saved;
  const lang = navigator.language || 'pt-BR';
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('it')) return 'it';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return 'pt-BR';
}

function applyLanguage(lang) {
  const t = translations[lang] || translations['pt-BR'];
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title = t.title;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = t[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const value = t[el.dataset.i18nAriaLabel];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = t[el.dataset.i18nAlt];
    if (value !== undefined) el.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const value = t[el.dataset.i18nContent];
    if (value !== undefined) el.setAttribute('content', value);
  });

  // Keep video labels in sync with current playback state.
  document.querySelectorAll('.video-toggle').forEach((button) => {
    const video = button.closest('.video-frame')?.querySelector('video');
    button.setAttribute('aria-label', video && !video.paused ? t.aria_video_pause : t.aria_video_play);
  });

  if (languageSelect) languageSelect.value = lang;
  localStorage.setItem('velum-language', lang);
}

if (languageSelect) {
  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));
}
applyLanguage(chooseInitialLanguage());

// Reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Minimal blue pointer glow on desktop.
const glow = document.querySelector('.cursor-glow');
if (glow) {
  window.addEventListener('pointermove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// Gentle hero parallax. Background stays an actual image; interface remains HTML/CSS.
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const y = Math.min(window.scrollY * 0.08, 55);
  heroBg.style.transform = `scale(1.04) translate3d(0, ${y}px, 0)`;
}, { passive: true });

// Mobile navigation.
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

// Video controls: one video plays at a time.
const videos = [...document.querySelectorAll('.video-card video')];
document.querySelectorAll('.video-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const video = button.closest('.video-frame').querySelector('video');
    const t = translations[currentLanguage];
    videos.forEach((v) => {
      if (v !== video) {
        v.pause();
        const other = v.closest('.video-frame').querySelector('.video-toggle');
        if (other) {
          other.textContent = '▶';
          other.setAttribute('aria-label', t.aria_video_play);
        }
      }
    });
    if (video.paused) {
      video.play();
      button.textContent = 'Ⅱ';
      button.setAttribute('aria-label', t.aria_video_pause);
    } else {
      video.pause();
      button.textContent = '▶';
      button.setAttribute('aria-label', t.aria_video_play);
    }
  });
});
