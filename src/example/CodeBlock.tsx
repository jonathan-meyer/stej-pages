import Card from "react-bootstrap/esm/Card";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps extends SyntaxHighlighterProps {
  title: string;
  language: string;
}

function CodeBlock({ children, title, language }: CodeBlockProps) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body className="m-0 p-0">
        <SyntaxHighlighter
          wrapLines
          language={language}
          style={vscDarkPlus}
          showLineNumbers
          className="m-0"
        >
          {children}
        </SyntaxHighlighter>
      </Card.Body>
    </Card>
  );
}

export default CodeBlock;
