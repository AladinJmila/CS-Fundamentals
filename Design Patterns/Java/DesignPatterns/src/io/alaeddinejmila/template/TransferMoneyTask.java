package io.alaeddinejmila.template;

import java.sql.SQLOutput;

public class TransferMoneyTask {
    private AuditTrail auditTrail;

    public TransferMoneyTask(AuditTrail auditTrail) {
        this.auditTrail = auditTrail;
    }

    public void execte() {
        auditTrail.record();
        System.out.println("Transfer Money");
    }
}
