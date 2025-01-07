import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = compat.extends("next/core-web-vitals", "next/typescript");

const eslintConfig = {
  extends: [...baseConfig],
  rules: {
    "@next/next/no-img-element": "off",        // Desativa a regra para <img> vs <Image />
    "jsx-a11y/alt-text": "off",                // Desativa a exigência do atributo alt em <img>
    "@typescript-eslint/no-explicit-any": "off", // Desativa a regra contra o uso de `any` em TypeScript
    "@next/next/no-page-custom-font": "off",   // Desativa a regra sobre fontes customizadas
    "react-hooks/exhaustive-deps": "off",      // Desativa a regra sobre dependências ausentes em useEffect
    "@typescript-eslint/no-unused-expressions": "off" // Desativa a regra sobre expressões não utilizadas
  }
};

export default eslintConfig;
