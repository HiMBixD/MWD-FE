import {environment} from 'src/environments/environment';

export class AppConstants {
  // tslint:disable-next-line:max-line-length
  public static APP_LOGO_BASE64 = 'data:image/png;base64,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';
  // Setting
  public static SETTING_DEFAULT_LANG = 'vi';

  // Date time
  public static DATE_FORMAT_DISPLAY = 'DD/MM/YYYY';
  public static DATE_FORMAT_QUERY = 'YYYY-MM-DD';
  public static DATE_TIME_FORMAT_QUERY = 'YYYY-MM-DD HH:mm:ss';
  public static MONTH_IN_YEAR: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  public static REASON_IN_YEAR: string[] = ['1', '2', '3', '4'];
  public static TIME_FORMAT_GMT = 'HH:mm:ss';
  public static TIME_FORMAT_GMT_A = 'H:mm:ss A';
  public static DATE_FORMAT_ZORRO = 'dd/MM/yyyy';

  public static CATEGORY_TYPES = {
    FIELD_CHANGE_UPDATE_REGISTER: 'FIELD_CHANGE_UPDATE_REGISTER',
    BUDGET_CODE: 'BUDGET_CODE',
    SYSTEM_ORGANIZATION: 'SYSTEM_ORGANIZATION',
    LEGAL_STATUS: 'LEGAL_STATUS',
    USER_CR_TYPE: 'USER_CR_TYPE',                                       // Loại yêu cầu thay đổi trạng thái
    REGISTER_STATUS: 'REGISTER_STATUS',
    ROLE_VIOLATE: 'ROLE_VIOLATE',
    UM_PEN_UNIT: 'UM_PEN_UNIT',
    UM_METHOD_CHARGE: 'UM_METHOD_CHARGE',
    VIOLATE_CONTRACT_TYPE: 'VIOLATE_CONTRACT_TYPE',
    USER_CR_APPROVE_STATUS: 'USER_CR_APPROVE_STATUS',
    USER_CR_SEARCH_STATUS_APPROVE: 'USER_CR_SEARCH_STATUS_APPROVE',
    EGP_ADJUST_SCOPE: 'EGP_ADJUST_SCOPE',                               // EGP_ADJUST_SCOPE
    EGP_CURRENCY: 'EGP_CURRENCY',                                       // EGP_CURRENCY
    CAT_COUNTRY_LIST: 'CAT_COUNTRY_LIST',                               // Danh sách quốc gia
    CAT_CODE_LIST: 'CAT_CODE_LIST',                                     // Danh sách mã chương
    CAT_STATUS_LIST: 'CAT_STATUS_LIST',                                 // Danh sách trạng thái
    CAT_AREA_TYPE: 'CAT_AREA_TYPE',                                     // Danh sách loại địa bàn
    UM_POLICY: 'UM_POLICY',                                             // Điều khoản
    UM_HAND_VIOLATION: 'UM_HAND_VIOLATION',                             // Hình thức xử lý vi phạm
    UM_SCOPE_APPLY: 'UM_SCOPE_APPLY',                                   // Phạm vi áp dụng
    UM_DATA_TYPE: 'UM_DATA_TYPE',                                       // Kiểu dữ liệu
    VIOLATE_STATUS: 'VIOLATE_STATUS',                                   // Trạng thái NT vi phạm
    IDENTITY_TYPE: 'IDENTITY_TYPE',                                     // Loại chứng thực UM4
    IDENTITY_TYPE_PERSONAL: 'IDENTITY_TYPE_PERSONAL',                   // Loại chứng thực CÁ NHÂN
    ESTABLISHMENT_INFORMATION: 'establishment_information',             // Thông tin thành lập
    BUSINESS_TYPE: 'BUSINESS_TYPE',                                     // Loại hình pháp lý
    CLASSIFICATION_DEPENDENT: 'classification_dependent',               // Phân loại trực thuộc
    ECONOMIC_PROFESSIONS: 'economic_professions',                       // Danh mục ngành kinh tế
    FILE_TYPE: 'FILE_TYPE',                                             // Loại hồ sơ
    CLASSIFICATION_DEPENDENT_TYPE: 'classification_dependent_type',     // Loại phân loại trực thuộc
    ROLE_STATUS: 'ROLE_STATUS',                                          // trạng thái của vai trò
    UM_ROLE: 'UM_ROLE',                                                   // vai trò đơn vị
    REASON_TYPE_USER_CHANGE_STATUS: 'REASON_TYPE_USER_CHANGE_STATUS',    // Loại lý do thay đổi trạng thái tài khoản
    _CLASSIFICATION_DEPENDENT_TYPE: {
      MINISTRY_OF_BRANCHES: 'ministry_of_branches',                      // Bộ ban ngành
      CORPORATIONS: 'corporations',                                      // Tập đoàn/ Tổng CT
      PROVINCE: 'province',                                              // Tỉnh/Thành
      OTHER: 'other',                                                    // Khác
    },
    CA_CHANGE_TYPE: 'CA_CHANGE_TYPE',
    CTS_STATUS: 'CTS_STATUS',                                            // Trạng thái CTS
    PROCESSING_TERM: 'PROCESSING_TERM',                                  // Hạn xử lý
    REPORT_PHASING: 'REPORT_PHASING',                                  // PHân kỳ báo cáo
    EPAYMENT_TYPE_FEE: 'EPAYMENT_TYPE_FEE',                             // Danh mục loại phí
    EQUIPMENT_RESOURCE: 'EQUIPMENT_RESOURCE',
    CONTRACT_STATUS: 'CONTRACT_STATUS',
    ACCOUNT_TYPE: 'ACCOUNT_TYPE',                                        // Loại tài khoản
    ID_UNIT_RELATIVE_BUDGET: 'ID_UNIT_RELATIVE_BUDGET',                  // Mã số đơn vị có quan hệ với ngân sách
    TESTIMONIAL_INFO: 'TESTIMONIAL_INFO',                                // Thông tin chứng thực
    UM_INFOMATION_TYPES: 'UM_INFOMATION_TYPES',                          // Loại thông tin
    STATUS_UNIT: 'STATUS_UNIT',                                          // Trạng thái đơn vị
    USER_CR_STATUS_REQUIRE: 'USER_CR_STATUS_REQUIRE',                    // Trạng thái yêu cầu (thay đổi trạng thái)
    _REGISTER_STATUS_TYPE: {
      APPROVE_REGISTER_STATUS: 'APPROVE_REGISTER_STATUS',
      SEARCH_REGISTER_STATUS: 'SEARCH_REGISTER_STATUS'
    },
    TYPE_OF_REGISTER: 'TYPE_OF_REGISTER',
    _TYPE_OF_REGISTER: {
      NEW: 'NEW',
      EDIT: 'EDIT'
    },
    _REGISTER_APPROVE_STATUS: {
      APPROVE: 'approve',
      DECLINE: 'decline',
      CANCEL: 'cancel',
      REVERSE: 'reverse'
    },
    RANK_TYPE: {
      ACHIEVEMENT: 'ACHIEVEMENT',
      RANKING: 'RANKING'
    },
    ORGANIZATION_STATUS: {
      EDITING: 'EDITING',
      PUBLICIZED: 'PUBLICIZED'
    },
    EBID_BID_FIELD: 'EBID_BID_FIELD',
    USER_ACCOUNT_TYPE: 'USER_ACCOUNT_TYPE', // lOẠI TÀI KHOẢN
    _USER_ID_TYPE: {
      CMND: 'CMND', // Chứng minh nhân dân
      HC: 'HC', // Hộ chiếu
      CC: 'CC', // Căn cước công dân
      DDCN: 'DDCN', // Số định danh cá nhân
      MST: 'TAX_CODE', // Mã số thuế
      MDD: 'ORG_CODE' // Mã định danh
    },
    SEND_VERIFICATION_CODE: 'SEND_VERIFICATION_CODE', // HÌNH THỨC NHẬN MÃ XÁC THỰC
    _SEND_VERIFICATION_CODE: {
      EMAIL: '1',
      MOBILE_APP: '0'
    },
    ACC_ACTIVE_STATUS: 'ACC_ACTIVE_STATUS', // TRẠNG THÁI TÀI KHOẢN
    _ACC_ACTIVE_STATUS: {
      ACTIVE: '1', // HOAT DONG
      BLOCKED: '0' // BI KHOA
    },
    USER_LANGUAGE: 'USER_LANGUAGE', // NGON NGU

    JOB_CODE: 'JOB_CODE', // Mã chương trình chạy tự động
    _JOB_CODE: {
      DISABLED_USER: 'SSA' // Mã chương trình khóa tài khoản NSD
    },
    _JOB_STATUS: { // Trạng thái chương trình chạy tự động
      ACTIVE: '1', // Đang hoạt động
      DISABLED: '0' // Tạm ngừng
    },
    JOB_STATUS: 'JOB_STATUS',
    LEGAL_SUSPEND_STATUS: 'LEGAL_SUSPEND_STATUS',
    _LEGAL_SUSPEND_STATUS: {
      REGISTRATION: 'REGISTRATION',
      TAX: 'TAX',
      PENDING: 'PENDING',
      TERMINATE: 'TERMINATE',
    },
    CA_STATUS: 'CA_STATUS',
    CA_APPROVED_STATUS: 'CA_APPROVED_STATUS',
    USER_STATUS: 'USER_STATUS',
  };

  public static ACTIONS: {
    INSERTED: 'inserted',
    UPDATED: 'updated',
    DELETED: 'deleted',
    CANCELED: 'canceled',
    APPROVED: 'approved',
    IMPORTED: 'imported',
    VIEWED: 'viewed',
    SEARCHED: 'searched',
    KICKED: 'kicked',
    REVERSE: 'reverse',
    DECLINE: 'decline',
    TERMINATE: 'terminate',
    PENDING: 'pending',
  };

  public static ROLE_DEFAULT = 'ROLE_DEFAULT';
  public static ROLE_ = 'ROLE';

  public static USER_LANGUAGE = {
    VN: 'vn',
    EN: 'en'
  };

  public static ID_NATIONALITY_VN = 'VN';

  public static _REQUEST_STATUS = [
    1, 2, 3, 4, 5, 6
  ];

  public static REQUEST_STATUS = {
    SAVE: 1,
    WAITING: 2,
    APPROVED: 3,
    DENY: 4,
    REVERSE: 5,
    CANCEL: 6
  };

  public static TAX_CODE_LENGTH = 14;

  public static _ACTIONS = environment.ACTIONS;                           // Actions của toàn hệ thống

  public static ACTIONS_LOCALSTORAGE = {
    USER_MENU_ACTIONS: 'USER_MENU_ACTIONS',                               // Actions by menu url
    USER_ACTIONS: 'USER_ACTIONS',                                         // Menus by role
  };

  public static EQUIPMENT_RESOURCE = {
    NAME: {
      OWN: 'Sở hữu của công ty',
      OUTSOURCE: 'Thuê ngoài',
      HIRE_PURCHASE: 'Thuê mua',
      SPEC_FABRICATED: 'Chế tạo đặc biệt'
    },
    CODE: {
      OWN: 'OWN',
      OUTSOURCE: 'OUTSOURCE',
      HIRE_PURCHASE: 'HIRE_PURCHASE',
      SPEC_FABRICATED: 'SPEC_FABRICATED'
    }
  };

  // Role register
  public static ROLE = {
    CDT: 'CDT',                                 // Chủ đầu tư
    BMT: 'BMT',                                 // Bên mời thầu
    NT: 'NT',                                   // Nhà thầu
    CSDT: 'CSDT',                               // Cơ sở đào tạo
  };

  // Areas register
  public static AREAS = {
    OFFICE: 'OFFICE',
    RECEIVER: 'RECEIVER',
    PARENT: 'PARENT',
  };

  // Icon
  public static ICONS = {
    CONFIRM: 'fa fa-question-circle warning',
    SUCCESS: 'fa fa-check-circle success',
    WARNING: 'fa fa-warning warning',
    ERRORS: 'fa fa-times-circle errors',
    INFO: 'fa fa-info-circle success'
  };

  // modules
  public static MODULES = {
    UM: 'UM',
    EBID: 'EBID',
    CAT: 'CAT',
    EDOC: 'EDOC',
    E_CONTRACT: 'E_CONTRACT',
    E_PAYMENT: 'E_PAYMENT',
    E_SHOP: 'E_SHOP'
  };

  public static REGISTER_STATUS: {
    SAVE: {CODE: '1', NAME: 'Lưu'},
    WAITING_APPROVED: {CODE: '2', NAME: 'Chờ phê duyệt'},
    APPROVED: {CODE: '3', NAME: 'Đã duyệt'},
    DENY: {CODE: '4', NAME: 'Từ chối'},
    REVERSE: {CODE: '5', NAME: 'Bảo lưu'},
    CANCEL: {CODE: '6', NAME: 'Hủy'},
  };

  public static FEE_STATUS = {
    1: 'Đã thanh toán',
    0: 'Chưa thanh toán'
  };

  public static DEFAULT_FOLDER_DUMP_NAME = '_QLND';

  public static GET_CAT_PAGE = {
    VIOLATE_USER_LIST_PAGE: 'VIOLATE_USER_LIST_PAGE',
    VIOLATE_USER_FORM_PAGE: 'VIOLATE_USER_FORM_PAGE',
    VIOLATE_USER_VIEW_PAGE: 'VIOLATE_USER_VIEW_PAGE',
    VIOLATE_ADMIN_LIST_PAGE: 'VIOLATE_ADMIN_LIST_PAGE',
    VIOLATE_ADMIN_FORM_PAGE: 'VIOLATE_ADMIN_FORM_PAGE',
    VIOLATE_ADMIN_VIEW_PAGE: 'VIOLATE_ADMIN_VIEW_PAGE',
    USER_MANAGEMENT_LIST_PAGE: 'USER_MANAGEMENT_LIST_PAGE',
    USER_MANAGEMENT_FORM_PAGE: 'USER_MANAGEMENT_FORM_PAGE',
    USER_MANAGEMENT_ADMIN_LIST_PAGE: 'USER_MANAGEMENT_ADMIN_LIST_PAGE',
    USER_MANAGEMENT_ADMIN_FORM_PAGE: 'USER_MANAGEMENT_ADMIN_FORM_PAGE',
    REGISTER_APPROVE_LIST_PAGE: 'REQUEST_APPROVE_LIST_PAGE',
    REGISTER_APPROVE_FORM_PAGE: 'REQUEST_APPROVE_FORM_PAGE',
    REGISTER_PAGE: 'REGISTER_PAGE',
    USER_CR_APPROVE_LIST_PAGE: 'USER_CR_APPROVE_LIST_PAGE',
    USER_CR_APPROVE_FORM_PAGE: 'USER_CR_APPROVE_FORM_PAGE',
    VIOLATE_APPROVE_LIST_PAGE: 'VIOLATE_APPROVE_LIST_PAGE',
    VIOLATE_APPROVE_FORM_PAGE: 'VIOLATE_APPROVE_FORM_PAGE',
    VIOLATE_APPROVE_PASS_PAGE: 'VIOLATE_APPROVE_PASS_PAGE',
    LOOK_UP_REGISTER_LIST_PAGE: 'LOOK_UP_REGISTER_LIST_PAGE',
    REGISTRATION_REPORT_LIST: 'REGISTRATION_REPORT_LIST',
    REGISTRATION_REPORT_REPORT: 'REGISTRATION_REPORT_REPORT',
    STATISTICS_AREA_OPERATION_LIST: 'STATISTICS_AREA_OPERATION_LIST',
    AGENCY_LIST: 'AGENCY_LIST',
    AGENCY_REPORT: 'AGENCY_REPORT',
    CONTRACTOR_HISTORY: 'CONTRACTOR_HISTORY',
    CONTRACTORS_SUSPENDED: 'CONTRACTORS_SUSPENDED',
    AGENCY_LEGAL_STATUS: 'AGENCY_LEGAL_STATUS',
    PROCESS_STATUS_BY_TIME: 'PROCESS_STATUS_BY_TIME',
    CERTIFICATE_REQUIREMENTS: 'CERTIFICATE_REQUIREMENTS',
    INPUT_CA_INFO: 'INPUT_CA_INFO',
    LOG_INFO: 'LOG_INFO',
    USER_PAYMENT_STATUS: 'USER_PAYMENT_STATUS',
    LEGAL_STATUS_USER: 'LEGAL_STATUS_USER',       // chấm dứt, tạm ngừng hoạt động do tình trạng pháp lý
    USER_CR_SEARCH: 'USER_CR_SEARCH',       // tra cứu tình trạng xử lý yêu cầu thay đổi trạng thái vai trò
    USER_CR_VIEW: 'USER_CR_VIEW',       // xem trạng xử lý yêu cầu thay đổi trạng thái vai trò
    USER_CR_CREATE: 'USER_CR_CREATE',       // tạo yêu cầu thay đổi trạng thái vai trò
  };

  // config file excel export
  public static EXPORT_EXCEL_METADATA = {
    AGENCY_LEGAL_STATUS: {
      FILE_NAME: 'Danh-sach-cac-co-quan-don-vi-cham-dut-do-tinh-trang-phap-ly',
      SHEET_TITLE: 'Danh sách các cơ quan, đơn vị chấm dứt do tình trạng pháp lý',
      TITLE: 'Danh sách các cơ quan, đơn vị chấm dứt do tình trạng pháp lý',
    },
    PROCESS_STATUS_BY_TIME: {
      FILE_NAME: 'Bao-cao-thong-ke-tinh-trang-xu-ly-yeu-cau-tam-ngung-cham-dut-khoi-phuc-theo-thoi-gian',
      SHEET_TITLE: 'Báo cáo thống kê tình trạng xử lý yêu cầu tạm ngừng, chấm dứt, khôi phục theo thời gian',
      TITLE: 'Báo cáo thống kê tình trạng xử lý yêu cầu tạm ngừng, chấm dứt, khôi phục theo thời gian',
    },
    PROCESS_STATUS_PENDING_TERMINATE: {
      FILE_NAME: 'Bao-cao-thong-ke-cac-co-quan-don-vi-co-trang-thai-tam-ngung-cham-dut',
      SHEET_TITLE: 'Báo cáo thống kê các cơ quan, đơn vị có trạng thái tạm ngừng, chấm dứt',
      TITLE: 'Báo cáo thống kê các cơ quan, đơn vị có trạng thái tạm ngừng, chấm dứt',
    },
    AGENCY_EXPIRED: {
      FILE_NAME: 'Danh-sach-cac-don-vi-chua-khoi-phuc',
      SHEET_TITLE: 'Danh sách các đơn vị chưa khôi phục',
      TITLE: 'Danh sách các đơn vị chưa khôi phục',
    },
    USERS_REPORT: {
      FILE_NAME: 'Bao-cao-thong-ke-tai-khoan-Nguoi-su-dung-tren-he-thong',
      SHEET_TITLE: 'Báo cáo thống kê tài khoản Người sử dụng trên hệ thống',
      TITLE: 'Báo cáo thống kê tài khoản Người sử dụng trên hệ thống',
    },
    VIOLATE_FORM_HANDLE: {
      FILE_NAME: 'Bao-cao-thong-ke-Nha-thau-vi-pham-theo-hinh-thuc-xu-ly',
      SHEET_TITLE: 'Báo cáo thống kê Nhà thầu vi phạm theo hình thức xử lý',
      TITLE: 'Báo cáo thống kê Nhà thầu vi phạm theo hình thức xử lý',
    },
    VIOLATE_SHOPPING: {
      FILE_NAME: 'Bao-cao-thong-ke-Nha-thau-vi-pham-phuong-thuc-mua-sam',
      SHEET_TITLE: 'Báo cáo thống kê Nhà thầu vi phạm theo phương thức mua sắm',
      TITLE: 'Báo cáo thống kê Nhà thầu vi phạm theo phương thức mua sắm',
    },
    MENU_ROLE: {
      FILE_NAME: 'Thong-tin-nhom-quyen-chuc-nang',
      SHEET_TITLE: 'Thông tin nhóm quyền chức năng',
      TITLE: 'Thông tin nhóm quyền chức năng',
    }
  };

  public static BKHDT_CODE = 94;
  public static LEGAL_SUSPEND_STATUS = {
    STOP_WORKING: 'STOP_WORKING',                // Tạm ngừng hoạt động
    DISSOLVED: 'DISSOLVED',                      // Đã giải thể
    STOP_UNFINISHED: 'STOP_UNFINISHED',          // NNT ngừng hoạt động nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST
    BANKRUPT: 'BANKRUPT',                        // Giải thể, phá sản
    REORGANIZATION: 'REORGANIZATION',            // Tổ chức lại tổ chức kinh tế
    REVOKED: 'REVOKED',                          // Bị thu hồi Giấy phép hoạt động
    DEBT_ENFORCE: 'DEBT_ENFORCE',                // Cưỡng chế nợ thuế
    CLOSE_BY_UNIT: 'CLOSE_BY_UNIT',              // Đóng theo ĐV chủ quản
    DEAD: 'DEAD',                                // Cá nhân chết, mất tích, mất năng lực hành vi dân sự
    STOP_FINISHED: 'STOP_FINISHED',              // NNT ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST
    OTHER: 'OTHER'                               // Khác
  };
  public static APPROVE_REGISTER_STATUS = {
    APPROVE: 'approve',                          // Duyệt
    REVERSE: 'reverse'                           // Bảo lưu
  };
  public static DEFAULT_DISABLE_TIME = 5000;
  public static PASSWORD_TYPE = [
    {code: 'SYSTEM', name: 'Đăng nhập trong hệ thống'},
    {code: 'CTS', name: 'Sử dụng CTS'},
  ];
  public static SYSTEM_ORG = {
    SYSTEM: 'SYSTEM',
    IDNES: 'IDNES',
    PPA: 'PPA'
  };
}
