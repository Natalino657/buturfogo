# BUTURFOGO — Transfers & Tours

Site bilingue (PT/EN) de passeios e transfers na Ilha do Fogo, Cabo Verde, com reservas por WhatsApp.

## Desenvolvimento

```bash
pnpm install
pnpm dev      # http://localhost:3000 (redireciona para /pt)
pnpm lint
pnpm build
```

## Onde mudar o quê

| O quê | Ficheiro |
|---|---|
| Preços, percursos, transfers, experiências | `src/data/services.ts` |
| Destinos e fotografias (autor, licença, origem) | `src/data/destinations.ts` + `public/images/destinations/` |
| Capítulos de "Passeios pela ilha" (fotos + passeios de cada um) | `src/data/chapters.ts` |
| Textos (PT / EN) | `src/i18n/dictionaries/pt.ts`, `en.ts` |
| Número de WhatsApp, menu | `src/config/site.ts` |

As fotografias são do Wikimedia Commons (CC BY-SA): o autor e a licença têm de continuar visíveis por baixo de cada foto e no rodapé.
