import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
};

export const ToolIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
  </svg>
);

export const PuzzleIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 1.25 1.25v.01M14.25 8.587c0 .69.56 1.25 1.25 1.25h.01a1.25 1.25 0 0 1 1.25-1.25v-.01M3.375 19.5c.908 0 1.652-.743 1.652-1.652V12.3c0-.909.744-1.652 1.652-1.652h10.642c.908 0 1.652.743 1.652 1.652v5.548c0 .909-.744 1.652-1.652 1.652H3.375Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.837a3.75 3.75 0 0 0-3.75 3.75h7.5A3.75 3.75 0 0 0 12 4.837Z" />
  </svg>
);

export const BrowserIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Zm-18 0h18" />
  </svg>
);

export const GitBranchIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 0h-3m3 0v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0ZM3.75 19.5a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Zm12.75 0a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z" />
  </svg>
);

export const FileIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const JsIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
  </svg>
);

export const SyntaxIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 15.75-4.5-7.5" />
  </svg>
);

export const VariableIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c.239.02.477.042.714.066m-1.428-.132-1.028-1.028m11.356 1.028-1.028 1.028m0 0a2.25 2.25 0 0 1-1.591.659v5.714m0 0a2.25 2.25 0 0 1-1.591.659m-11.356 0A2.25 2.25 0 0 1 5 14.5m14 0v5.714m0 0a2.25 2.25 0 0 1-1.591.659m-11.356 0a2.25 2.25 0 0 1-1.591-.659m14.659-5.714a2.25 2.25 0 0 1-1.591.659M5 14.5a2.25 2.25 0 0 1-1.591-.659m0 0l-1.028-1.028m1.028 1.028 1.028-1.028m-1.028 1.028v-5.714m0 0a2.25 2.25 0 0 1 1.591-.659M5 14.5v-5.714" />
  </svg>
);

export const TypeIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

export const OperatorIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const ExerciseIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

export const DecisionIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 2.25-2.25H15M15 13.5h-3.375a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25H15M9 13.5v-1.5a2.25 2.25 0 0 1 2.25-2.25H15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v6.75" />
  </svg>
);

export const LoopIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992m0 0h-4.992m4.992 0-3.181-3.183a8.25 8.25 0 0 0-11.667 0l-3.181 3.183" />
  </svg>
);

export const AdvancedLoopIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
  </svg>
);

export const QuizIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);

export const SummaryIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.184m-1.5.184a6.01 6.01 0 0 1-1.5-.184m3.75 3.622a2.25 2.25 0 0 1 3.52 0 2.25 2.25 0 0 1-3.52 0M12 12.75V18m0 0a2.25 2.25 0 0 1-2.25-2.25M12 18a2.25 2.25 0 0 0 2.25-2.25M12 3.75A2.25 2.25 0 0 1 14.25 6m-4.5 0A2.25 2.25 0 0 1 12 3.75m0 0V6m-2.25-2.25A2.25 2.25 0 0 0 7.5 6M7.5 15.75A2.25 2.25 0 0 1 5.25 18m0-4.5A2.25 2.25 0 0 1 7.5 11.25m9-4.5A2.25 2.25 0 0 0 18.75 9m-1.5 4.5A2.25 2.25 0 0 1 15 15.75" />
  </svg>
);

export const SwitchIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h14.25M3 13.5h14.25m5.25-4.5a2.25 2.25 0 0 1-2.25 2.25H3a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 3 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v2.25Z" />
  </svg>
);

export const FunctionIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75h7.5a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25h3m-3 3.75h3" />
    <path d="M11.25 15.75a.75.75 0 1 0 1.5 0 .75.75 0 1 0-1.5 0Z" />
  </svg>
);

export const TemplateLiteralIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 2.25L3.75 5.25l2.625 3M17.625 2.25L20.25 5.25l-2.625 3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15.75h18" />
  </svg>
);

export const ScopeIcon: React.FC = () => (
    <svg {...iconProps} transform="scale(0.8) translate(2.5 2.5)">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V17.25m0 0V6.75m0 10.5a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5ZM12 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM12 17.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
    </svg>
);

export const ClosureIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5V14.25" />
        <path d="M12 16.5a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5Z" />
    </svg>
);

export const ArrowFunctionIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5m-4.5 0a2.25 2.25 0 0 1-2.25-2.25V5.25a2.25 2.25 0 0 1 2.25-2.25h4.5a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25M9.75 9.75L12 12m2.25-2.25L12 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6.75m0 0l-3-3m3 3l3-3" />
    </svg>
);
