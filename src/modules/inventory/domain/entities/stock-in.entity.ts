import { BaseEntity } from '../../../../shared/domain/base.entity';
import { BusinessRuleException } from '../../../../shared/exceptions/domain.exception';

export type StockInStatus = 'DRAFT' | 'APPROVED' | 'CANCELLED';

export class StockIn extends BaseEntity {
  readonly code: string;
  readonly supplierId: string;
  readonly status: StockInStatus;
  readonly totalAmount: number;

  approve(): StockIn {
    if (this.status !== 'DRAFT') {
      throw new BusinessRuleException('Chỉ có thể duyệt phiếu ở trạng thái DRAFT');
    }
    return Object.assign(Object.create(Object.getPrototypeOf(this)), {
      ...this,
      status: 'APPROVED',
    });
  }

  cancel(): StockIn {
    if (this.status === 'APPROVED') {
      throw new BusinessRuleException('Không được xóa chứng từ đã duyệt, chỉ được hủy');
    }
    return Object.assign(Object.create(Object.getPrototypeOf(this)), {
      ...this,
      status: 'CANCELLED',
    });
  }
}
