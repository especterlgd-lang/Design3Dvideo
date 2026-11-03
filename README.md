# Design video 3D

Ambiente de criação de vídeos verticais (1080 × 1920) para a TheTarF, com Remotion + Three.js.
Combina gravações, painéis em perspectiva, tipografia animada e objetos 3D sincronizados com a fala.

## Stack

- Remotion (composição e render)
- Three.js + @react-three/fiber + @react-three/drei (cenas 3D)
- @remotion/three (sincronização 3D com o frame do vídeo)
- Skills oficiais do Remotion em `.agents/skills/`

## Comandos

```bash
npm install          # instala dependências
npm run start        # Remotion Studio (prévia em http://localhost:3000)
npm run typecheck    # verifica TypeScript
npm run render       # renderiza TestVertical em exports/test-vertical.mp4
```

## Estrutura

```
assets/
  recordings/   gravações pessoais (NÃO versionadas)
  logos/        logos (NÃO versionadas)
  models/       GLB/GLTF (NÃO versionados)
  audio/        áudio/narração (NÃO versionados)
exports/        vídeos renderizados (NÃO versionados)
src/
  index.ts              entrada do Remotion
  Root.tsx              registro das composições
  compositions/         composições de vídeo
  scenes/               cenas 3D reutilizáveis
```

Arquivos pesados e pessoais ficam fora do Git pelo `.gitignore`. Para manter um arquivo de exemplo, use
`assets/**/README.md` ou um arquivo de amostra pequeno.
