package org.tdl.vireo.condition;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;

import org.springframework.core.env.StandardEnvironment;

public class NotRunningTests implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        return !((StandardEnvironment) context.getEnvironment()).getPropertySources().contains("integrationTest");
    }

}
