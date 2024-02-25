import { TypedDocumentNode, gql } from "@urql/core";

export interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
}

export interface Question {
  content: string;
  codeSnippets: CodeSnippet[];
  difficulty: string;
  titleSlug: string;
  title: string;
  exampleTestcaseList: string[];
}

export interface QuestionVariables {
  titleSlug: string;
}

export const data: TypedDocumentNode<
  { question: Question },
  QuestionVariables
> = gql`
query RyanWay($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
        content
        codeSnippets {
            lang
            langSlug
            code
        }
        difficulty
        exampleTestcaseList
        titleSlug
        title
    }
}
`;
