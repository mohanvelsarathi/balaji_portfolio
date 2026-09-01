interface ArchitectureDiagramProps {
  variant?: 'hero' | 'project';
  simplified?: boolean;
}

const PROJECT_NODES = [
  { 
    id: 'auth', 
    label: 'Spring Security', 
    tag: 'Authentication & Authorization', 
    accent: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    )
  },
  { 
    id: 'controller', 
    label: 'REST Controllers', 
    tag: 'Handle requests · CRUD · OTP · Auth', 
    accent: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  { 
    id: 'service', 
    label: 'Service Layer', 
    tag: 'Business Logic & Validation', 
    accent: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.99l1.005.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  { 
    id: 'repository', 
    label: 'Repository Layer', 
    tag: 'JPA / Hibernate', 
    accent: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  { 
    id: 'mysql', 
    label: 'MySQL', 
    tag: 'Data Persistence', 
    accent: 'green',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
];

export function ArchitectureDiagram({ variant = 'hero', simplified = false }: ArchitectureDiagramProps) {
  // Use PROJECT_NODES always for this redesign
  const displayNodes = simplified ? PROJECT_NODES.slice(0, 4) : PROJECT_NODES;

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto" aria-hidden="true" role="presentation">
      {displayNodes.map((node, index) => (
        <div key={node.id} className="flex flex-col items-center w-full">
          {/* Node */}
          <div
            className={[
              'relative w-full flex items-center px-4 py-3 rounded-lg border transition-colors duration-150',
              node.accent === true
                ? 'bg-blue-500/10 border-blue-500/30'
                : node.accent === 'green'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-[var(--color-surface)] border-[var(--color-border)]',
            ].join(' ')}
          >
            {/* Icon */}
            <div className={[
              'flex-shrink-0 mr-4',
              node.accent === true ? 'text-[var(--color-accent)]' : node.accent === 'green' ? 'text-green-500' : 'text-purple-400'
            ].join(' ')}>
              {node.icon}
            </div>
            
            {/* Text */}
            <div className="flex flex-col text-left">
              <span className="text-[14px] font-bold text-[var(--color-text-primary)]">
                {node.label}
              </span>
              <span className="text-[12px] text-[var(--color-text-muted)] mt-0.5">
                {node.tag}
              </span>
            </div>
          </div>

          {/* Connector arrow */}
          {index < displayNodes.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-[var(--color-border)]" />
              <svg width="6" height="4" viewBox="0 0 6 4" fill="var(--color-border)" className="mt-px">
                <path d="M0 0L3 4L6 0H0Z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
