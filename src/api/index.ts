import { TypedDocumentNode, gql } from "@urql/core";

export interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
}

export interface GraphqlQuestion {
  content: string;
  codeSnippets: CodeSnippet[];
  difficulty: string;
  titleSlug: string;
  title: string;
  exampleTestcaseList: string[];
  metaData: string;
}

export type Type = "integer" | "string" | "string[]" | "integer[]";

export interface Return {
  type: Type;
}

export interface Param {
  name: string;
  type: Type;
}

export interface MetaData {
  name: string;
  params: Param[];
  return: Return;
}

export interface Question {
  content: string;
  codeSnippets: CodeSnippet[];
  difficulty: string;
  titleSlug: string;
  title: string;
  exampleTestcaseList: string[];
  metaData: MetaData;
}

export interface QuestionVariables {
  titleSlug: string;
}

export const data: TypedDocumentNode<
  { question: GraphqlQuestion },
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
        metaData
    }
}
`;
