import React, { FC, ReactElement } from "react"

interface IProps {
  caption: string
  value: number
  postfix?: string
  testId?: string
}
const ValueCaption: FC<IProps> = ({
  caption,
  value,
  postfix,
  testId
}: IProps): ReactElement => (
  <div className="summary_group">
    <div className="summary_group_text" data-testid="capture_text">
      {caption}
    </div>
    <div className="summary_group_flex">
      <div className="summary_group_value" data-testid={testId}>
        {value}
      </div>
      <div className="summary_group_postfix" data-testid="capture_postfix">
        {postfix}
      </div>
    </div>
  </div>
)

export default React.memo(ValueCaption)
