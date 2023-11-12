# DuckShop

## Scripts i package.json

Dev: `npm run dev`
Test (unit/ui): `npm run test`
Test (end to end): `npm run test:playwright`
Build: `npm run build`
Preview (efter build): `npm run preview`
Svelte check: `npm run check` (kör någon svelte-check som letar TS-fel ser det ut som)

## SSR vs SPA

Det var lite oklart för mig om det var okej att frontenden använde SSR eller inte så jag satte att SSR är på default så man kan få finare errormeddelanden men man kan även stänga av SSR om man vill.

I src/routes/+layout.ts kan man sätta `SSR` och `prerender` till `false` så kan man se alla fetches etc i klienten istället.

## Filstruktur

### Routes

/src/routes/+layout.svelte - Layout som blir en komponent med ett slot som innehåller alla andra sidor
/src/routes/+layout.ts - Fil med load function för att ladda data och spara som en prop i t.ex `data.products` som sedan används i .svelte

/src/routes/+page.svelte - Indexsidan
/src/routes/+page.ts - Load function som skickar en till +error.svelte om t.ex servern är av och SSR är på eller 404 om routen inte finns

/src/routes/products/[id]/+page.svelte - Sidan med detaljerad info om en produkt, använder params
/src/routes/products/[id]/+page.ts - Load function, jag använder bara datat för alla produkter som jag fetchade i +layout.ts så kan jag bygga sidan statiskt och den fungerar utan några fetches alls så länge man har express-servern igång när man bygger. Man kan dock gå till http://localhost:3001/product/6 om man vill!

/src/routes/+error.svelte - fil som visas när något error händer i SSR, verkar inte fungera bra klientrenderad

/src/routes/cart/+page.svelte - Kundvagnssidan
/src/routes/cart/+page.ts - Load function som hämtar info om kundvagnen

### .ts

/src/lib/ - Innehåller .ts-filer med interfaces, utils, constants och stores (små globala states)

/src/lib/components - Innehåller (halvröriga) komponenter

### Tests (`npm run test`)

/src/lib/utils.unit.test.ts - Unit tests för utils

/src/routes/layout.ui.test.ts - UI-test för +layout.svelte

/src/routes/layout.unit.test.ts - Unit-test för load function i +layout.ts för att kontrollera datat från express. Varning för väldigt konstig load(), behövde skicka in massor av saker för att TS inte skulle klaga...! Ser inte helt rimligt ut men testen fungerar så jag är glad!

/tests/test.ts (kanske inte bäst namn) - End to end-test med Playwright, körs i dev så ha allt igång! Körs utan headless så man ser vad som händer (hjälpte mig)
