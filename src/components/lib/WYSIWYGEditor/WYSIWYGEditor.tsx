import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { EditorProps } from 'react-draft-wysiwyg';

import styles from './WYSIWYGEditor.module.scss';
import type WYSIWYGEditorProps from './WYSIWYGEditor.props';
import { customStyleMap, toolbar } from './WYSIWYGEditorConfig';

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const WYSIWYGEditor: FC<WYSIWYGEditorProps> = ({
  label,
  containerClass,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div className="w-full">
      <div className="w-full">
        {label && <label className={styles.label}>{label} </label>}
        <div
          className={`${styles.container} ${containerClass || ''} ${
            error ? 'border-red-500' : ''
          }`}
        >
          <Editor
            wrapperClassName={`demo-wrapper w-full bg-[#F9FAFB]`}
            editorClassName="demo-editor w-full px-5"
            customStyleMap={customStyleMap}
            toolbar={toolbar}
            {...rest}
          />
        </div>
      </div>

      {helperText && (
        <span
          className={`${styles.helper_text} ${error ? 'text-red-600' : ''}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default WYSIWYGEditor;
