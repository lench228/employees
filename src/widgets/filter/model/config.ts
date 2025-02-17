import { iFilterConfig } from "./types.ts";

const filtersConfig: iFilterConfig[] = [
  {
    label: "Должность",
    query: "Position",
    options: [
      { value: "Frontend", label: "Frontend-разработчик" },
      { value: "Backend", label: "Backend-разработчик" },
      { value: "Analyst", label: "Аналитик" },
      { value: "Manager", label: "Менеджер" },
      { value: "Designer", label: "Дизайнер" },
    ],
  },
  {
    label: "Пол",
    query: "Gender",
    options: [
      { value: "Male", label: "Мужчина" },
      { value: "Female", label: "Женщина" },
    ],
  },
  {
    label: "Стек технологий",
    query: "Stack",
    options: [
      { value: "CSharp", label: "C#" },
      { value: "React", label: "React" },
      { value: "Java", label: "Java" },
      { value: "PHP", label: "PHP" },
      { value: "Figma", label: "Figma" },
      { value: "Word", label: "Word" },
    ],
  },
];

export default filtersConfig;
