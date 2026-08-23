VELUM LANDING PAGE — RELEASE BUILD

Modelo:
- VELUM-Coder
- Base: unsloth/LFM2.5-8B-A1B
- Draft model: LFM2.5-230M
- 8B total / ~1B active
- Post-training: ~95% code / ~5% natural language
- Distribuição: quantized model only
- Hugging Face: https://huggingface.co/guell00/VELUM-Coder

A landing inclui:
- PT-BR / English / 中文 / Italiano / Español
- teasers em vídeo
- screenshots de avaliações funcionais
- demos jogáveis embutidas (Flappy Bird, Bonsai Voxel, Railway Rush)
- seção transparente sobre benchmarks
- link direto para download no Hugging Face

Observação:
Os projetos demonstram capacidade funcional, mas não são apresentados como substitutos de benchmarks padronizados.

V4
- layout full-width
- seção de configurações de inferência
- tabela de sampling recomendado
- dicas de prompting + prefill
- system prompt recomendado
- biblioteca de prompts dos exemplos
- arquivo completo de prompts em docs/prompts-dos-joguinhos.md

V5
- adicionada explicação sobre a limitação de raciocínio com ~1B parâmetros ativos
- adicionada estrutura de prompt recomendada:
  Crie um [o que você quiser] em um único HTML.
  Retorne somente o HTML completo.

V6
- added structured output JSON Schema section
- copyable schema for language/code/markdown_full
